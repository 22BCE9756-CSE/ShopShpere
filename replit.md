# E-Commerce Application

## Overview

This is a full-stack e-commerce application built with React, TypeScript, Express.js, and PostgreSQL. The application features a modern responsive design using Tailwind CSS and shadcn/ui components. It includes both customer-facing shopping functionality and an admin dashboard for order and inventory management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **State Management**: Zustand for cart and checkout state
- **Data Fetching**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Neon serverless
- **ORM**: Drizzle ORM for type-safe database operations
- **Storage**: In-memory storage implementation (MemStorage) for development
- **API**: RESTful API design with proper error handling
- **Session Management**: Express sessions with PostgreSQL store

### Build System
- **Bundler**: Vite for frontend development and building
- **Dev Server**: Vite dev server with HMR (Hot Module Replacement)
- **Production Build**: esbuild for server bundling
- **TypeScript**: Shared types between frontend and backend

## Key Components

### Database Schema (shared/schema.ts)
- **Categories**: Product categorization with metadata
- **Products**: Complete product information including pricing, inventory, and ratings
- **Orders**: Customer orders with status tracking
- **Order Items**: Individual items within orders with quantities and prices
- Uses Drizzle Zod for runtime validation of database operations

### Frontend Components
- **Navigation**: Global header with search, cart, and admin access
- **Product Grid**: Responsive product display with filtering and sorting
- **Cart Sidebar**: Slide-out shopping cart with quantity management
- **Checkout Modal**: Complete checkout flow with form validation
- **Admin Dashboard**: Order management and inventory alerts

### Backend Services
- **Storage Interface**: Abstract storage layer (IStorage) for data operations
- **Route Handlers**: RESTful endpoints for categories, products, orders, and analytics
- **Middleware**: Request logging, JSON parsing, and error handling

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Typed responses ensure type safety across the stack
5. **State Updates**: Client state updates trigger UI re-renders automatically

### Shopping Flow
1. User browses products filtered by category or search
2. Products added to cart (stored in Zustand + localStorage)
3. Checkout process collects customer and payment information
4. Order creation updates database and clears cart
5. Admin can track and update order status

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **zustand**: Client state management
- **react-hook-form**: Form handling with validation
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Primitive UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Static type checking
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development
- Vite dev server for frontend with HMR
- tsx for running TypeScript server code directly
- Shared TypeScript configuration for consistency

### Production Build
1. **Frontend**: Vite builds optimized React bundle to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations manage schema changes
4. **Static Serving**: Express serves built frontend in production

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Development vs production modes handled automatically
- Replit-specific plugins enabled only in development

The application uses a monorepo structure with clear separation between client, server, and shared code, making it easy to maintain and scale.