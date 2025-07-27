import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import { MessageCircle, Phone } from "lucide-react";

const formSchema = insertContactSchema.extend({
  services: z.array(z.string()).default([]),
});

type FormData = z.infer<typeof formSchema>;

const serviceOptions = [
  "360 Photo Booth",
  "Selfie Booth",
  "Charcuterie Cart", 
  "Dutch Pancakes",
  "Backdrops",
  "Event Furniture",
  "Full Package"
];

const eventTypes = [
  "Wedding",
  "Birthday Party", 
  "Corporate Event",
  "Engagement",
  "Baby Shower",
  "Bridal Shower",
  "Anniversary",
  "Other"
];

export default function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      eventType: "",
      location: "",
      services: [],
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormData) => 
      apiRequest("POST", "/api/contacts", data),
    onSuccess: () => {
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours with a personalized quote.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gold to-gold-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Make Your Event Epic?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Get in touch today for a free, no-obligation quote. Let's bring your vision to life with our premium event services.
        </p>
        
        <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left">Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left">Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left">Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+44 7123 456789" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left">Event Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left">Event Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-left">Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Event venue/location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="services"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-left">Services Interested In</FormLabel>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {serviceOptions.map((service) => (
                        <FormField
                          key={service}
                          control={form.control}
                          name="services"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(service)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, service])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== service
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {service}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-left">Tell us about your event</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Number of guests, venue location, any special requirements..."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-gold text-white hover:bg-gold-dark text-lg py-6"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Sending..." : "Get My Free Quote"}
              </Button>
            </form>
          </Form>
          
          <div className="flex items-center justify-center mt-6 space-x-6">
            <a href="#" className="flex items-center text-gold hover:text-gold-dark transition-colors">
              <MessageCircle className="mr-2" size={20} />
              <span className="font-semibold">WhatsApp</span>
            </a>
            <a href="tel:+447123456789" className="flex items-center text-gold hover:text-gold-dark transition-colors">
              <Phone className="mr-2" size={20} />
              <span className="font-semibold">Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
