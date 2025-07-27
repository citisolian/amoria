import { type User, type InsertUser, type Contact, type InsertContact, type BlogPost, type InsertBlogPost, type Testimonial, type InsertTestimonial } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private blogPosts: Map<string, BlogPost>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.blogPosts = new Map();
    this.testimonials = new Map();
    
    // Initialize with some sample blog posts and testimonials
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample blog posts
    const blogPost1: BlogPost = {
      id: randomUUID(),
      title: "How to Choose the Right Backdrop for Your Event",
      slug: "how-to-choose-backdrop",
      excerpt: "Discover the secrets to selecting the perfect backdrop that complements your event theme and creates stunning photo opportunities.",
      content: "Choosing the right backdrop for your event is crucial for creating the perfect atmosphere and memorable photos...",
      imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const blogPost2: BlogPost = {
      id: randomUUID(),
      title: "5 Reasons to Add a Photo Booth to Your Wedding",
      slug: "photo-booth-wedding-reasons",
      excerpt: "Photo booths have become a wedding essential. Here's why you should consider adding one to your special day.",
      content: "Wedding photo booths have revolutionized how guests interact and create memories at receptions...",
      imageUrl: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    this.blogPosts.set(blogPost1.id, blogPost1);
    this.blogPosts.set(blogPost2.id, blogPost2);
    
    // Sample testimonials
    const testimonials = [
      {
        id: randomUUID(),
        name: "Chloe Brabbins",
        rating: "5",
        review: "Gurmukh has been absolutely amazing – from the very first contact right through to the event day and setup! He was so friendly, professional, and easy to work with throughout the entire process.",
        eventType: "Wedding",
        approved: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Nadirur Choudhury",
        rating: "5",
        review: "I had the pleasure of Aura supporting me with my 30th birthday party recently. Their service was outstanding and they really went above and beyond to make sure the event was perfect!",
        eventType: "Birthday Party",
        approved: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Ben Peacock",
        rating: "5",
        review: "We booked a 360 video booth for our wedding with Aura events. Our guests absolutely loved this, had fun and we had great joy in watching back the videos. Highly recommend!",
        eventType: "Wedding",
        approved: true,
        createdAt: new Date(),
      }
    ];
    
    testimonials.forEach(testimonial => {
      this.testimonials.set(testimonial.id, testimonial);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt!.getTime() - a.createdAt!.getTime()
    );
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      post => post.slug === slug && post.published
    );
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = {
      ...insertPost,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .filter(testimonial => testimonial.approved)
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      createdAt: new Date(),
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
