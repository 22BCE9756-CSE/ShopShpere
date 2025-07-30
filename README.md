# EliteCommerce - Advanced E-commerce Platform

A full-stack e-commerce application built with React, TypeScript, Express.js, and modern web technologies. This project showcases advanced full-stack development skills with a professional-grade architecture.

## 🚀 Features

### Customer Features
- **Product Catalog**: Browse products by categories (Laptops, Smartphones, Audio, Gaming)
- **Advanced Search & Filtering**: Search products with category and price filters
- **Shopping Cart**: Persistent cart with quantity management (stored locally)
- **Secure Checkout**: Complete checkout flow with form validation
- **Responsive Design**: Mobile-first design with modern UI components

### Admin Features
- **Dashboard Analytics**: Revenue, orders, users, and inventory KPIs
- **Order Management**: View and update order statuses in real-time
- **Inventory Alerts**: Low stock warnings and out-of-stock notifications
- **Data Visualization**: Charts and metrics for business insights

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Wouter** for client-side routing
- **Zustand** for state management
- **TanStack Query** for server state
- **shadcn/ui** + **Radix UI** for components
- **Tailwind CSS** for styling
- **React Hook Form** + **Zod** for form validation

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **In-memory storage** for development
- **RESTful API** design
- **Zod** for runtime validation

### Build & Development
- **Vite** for frontend bundling
- **esbuild** for server bundling
- **Hot Module Replacement** (HMR)
- **TypeScript** throughout the stack

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Download & Extract
Download the project zip file and extract it to your desired location.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server

**For Windows (Command Prompt):**
```cmd
start-dev.bat
```

**For Windows (PowerShell):**
```powershell
.\start-dev.ps1
```

**For Mac/Linux:**
```bash
NODE_ENV=development tsx server/index.ts
```

This will start both the frontend (Vite) and backend (Express) servers concurrently.

### 4. Access the Application
- **Frontend**: http://localhost:5000 (main application)
- **Admin Dashboard**: http://localhost:5000/admin
- **API**: http://localhost:5000/api/*

## 🗂 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Route components
│   │   ├── lib/           # Utilities and configurations
│   │   └── hooks/         # Custom React hooks
├── server/                # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data storage layer
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema and types
└── package.json          # Dependencies and scripts
```

## 🔧 Development Scripts

```bash
# Start development server (frontend + backend)
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Type checking
npm run type-check
```

## 🎯 Key Implementation Highlights

### Architecture Decisions
- **Monorepo Structure**: Shared types between frontend and backend
- **Type Safety**: End-to-end TypeScript with runtime validation
- **Modern State Management**: Zustand for client state, TanStack Query for server state
- **Component Library**: shadcn/ui for consistent, accessible UI components

### Performance Features
- **Code Splitting**: Lazy loading of routes and components
- **Optimistic Updates**: Immediate UI feedback for better UX
- **Caching Strategy**: Smart query invalidation and background refetching
- **Bundle Optimization**: Tree shaking and modern build optimizations

### Developer Experience
- **Hot Reload**: Instant feedback during development
- **Type Checking**: Compile-time error detection
- **Consistent Styling**: Tailwind CSS with custom design system
- **Form Validation**: Client and server-side validation with Zod

## 🚀 Production Deployment

For production deployment:

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Set up environment variables**:
   - `DATABASE_URL` (if using PostgreSQL)
   - `NODE_ENV=production`

3. **Run production server**:
   ```bash
   npm start
   ```

## 📊 Sample Data

The application comes with pre-populated sample data including:
- 4 product categories
- Multiple products with realistic details
- Sample orders for testing
- Mock analytics data

## 🔒 Security Features

- Input validation with Zod schemas
- XSS prevention through proper data sanitization
- CSRF protection ready
- Secure session management
- Type-safe API endpoints

## 🎨 UI/UX Features

- **Responsive Design**: Works on all device sizes
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Loading States**: Skeleton loaders and loading indicators
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Real-time feedback for user actions

## 📝 API Endpoints

### Products
- `GET /api/products` - List products with optional filtering
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Categories
- `GET /api/categories` - List all categories
- `POST /api/categories` - Create category (admin)

### Orders
- `GET /api/orders` - List orders (admin)
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create new order
- `PATCH /api/orders/:id/status` - Update order status (admin)

### Analytics
- `GET /api/dashboard/stats` - Dashboard statistics (admin)

## 🤝 Contributing

This project demonstrates professional full-stack development practices and can serve as a reference for:
- Modern React patterns
- TypeScript best practices
- Express.js API design
- E-commerce functionality
- Admin dashboard implementation

## 📄 License

This project is created for demonstration purposes and showcases advanced full-stack development capabilities.