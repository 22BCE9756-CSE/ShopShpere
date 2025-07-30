#!/usr/bin/env node

// Cross-platform development server starter
process.env.NODE_ENV = 'development';

console.log('🚀 Starting EliteCommerce Development Server...');
console.log('📦 Environment: development');
console.log('🌐 Server will be available at: http://localhost:5000');
console.log('👨‍💼 Admin dashboard at: http://localhost:5000/admin');
console.log('');

// Import and run the server
import('./server/index.ts').catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});