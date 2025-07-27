# Amoria Events Website

## Overview

This is a luxury event styling and hire business website for Amoria Events, built as a full-stack web application. The application provides photo booth hire, floral backdrops, balloon decor, food carts, event furniture hire, and personalized signage services for events like weddings, corporate events, and parties.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite with React plugin
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for Neon Database)
- **Session Storage**: PostgreSQL sessions with connect-pg-simple
- **API Design**: RESTful API endpoints under `/api` prefix

### Project Structure
- **Monorepo**: Single repository with shared code
- **Client**: React frontend in `client/` directory
- **Server**: Express backend in `server/` directory  
- **Shared**: Common schemas and types in `shared/` directory
- **Build Output**: Compiled to `dist/` directory

## Key Components

### Database Schema
- **Users**: Authentication system (id, username, password)
- **Contacts**: Customer inquiries with event details
- **Blog Posts**: Content management for blog articles
- **Testimonials**: Customer reviews and ratings

### API Endpoints
- **POST /api/contacts**: Submit contact form
- **GET /api/contacts**: Retrieve all contacts (admin)
- **GET /api/blog**: Fetch blog posts
- **GET /api/blog/:slug**: Get single blog post
- **GET /api/testimonials**: Retrieve testimonials
- **POST /api/testimonials**: Submit new testimonial

### Frontend Pages
- **Home**: Hero section, services overview, testimonials
- **Service Pages**: 360° Photo Booth, Selfie Booth, Food Carts, Backdrops, Furniture
- **Packages**: Service bundles and pricing
- **Gallery**: Image showcase with categories
- **Contact**: Contact form and business information
- **Blog**: Content marketing articles
- **FAQs**: Frequently asked questions

### UI Components
- **Layout**: Header with navigation, footer with links
- **Forms**: Contact form with validation and submission
- **Interactive**: WhatsApp float, testimonial carousel
- **Content**: Service grids, hero sections, image galleries

## Data Flow

### Contact Form Submission
1. User fills out contact form with event details
2. Form validates using Zod schema on frontend
3. Data submitted to `/api/contacts` endpoint
4. Server validates and stores in PostgreSQL
5. Success/error response returned to user

### Content Display
1. Page components fetch data using TanStack Query
2. API endpoints serve data from PostgreSQL via Drizzle ORM
3. Components render with loading states and error handling
4. Images served from Unsplash for demo purposes

### Navigation
1. Wouter handles client-side routing
2. Header navigation with dropdowns for services
3. Mobile-responsive navigation with sheet component
4. SEO-friendly URL structure

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database operations
- **connect-pg-simple**: PostgreSQL session storage

### UI Framework
- **shadcn/ui**: Pre-built component library
- **Radix UI**: Headless UI primitives
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library

### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **Vite**: Fast development and build tooling
- **ESBuild**: Backend bundling for production
- **PostCSS**: CSS processing with Tailwind

### External Services
- **Unsplash**: Demo images for gallery and content
- **Replit**: Development environment integration

## Deployment Strategy

### Development
- **Scripts**: `npm run dev` starts both frontend and backend
- **Hot Reload**: Vite provides fast refresh for frontend changes
- **TypeScript**: Real-time type checking across all code

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: ESBuild compiles Express server to `dist/index.js`
- **Database**: Drizzle Kit manages schema migrations
- **Assets**: Static files served from build directory

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string
- **NODE_ENV**: Environment detection (development/production)
- **Session Storage**: PostgreSQL-backed sessions for scalability

The application follows a modern full-stack architecture with type safety, performance optimization, and scalable deployment patterns. The luxury brand aesthetic is maintained through careful design choices in the UI components and color scheme.