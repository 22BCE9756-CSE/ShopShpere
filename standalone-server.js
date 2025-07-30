const express = require('express');
const path = require('path');
const { storage } = require('./server/storage.ts');

const app = express();
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/api/categories', async (req, res) => {
  const categories = await storage.getCategories();
  res.json(categories);
});

app.get('/api/products', async (req, res) => {
  const { categoryId, search } = req.query;
  const products = await storage.getProducts(categoryId, search);
  res.json(products);
});

app.get('/api/dashboard/stats', async (req, res) => {
  const stats = await storage.getDashboardStats();
  res.json(stats);
});

// Serve the main HTML page
app.get('*', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EliteCommerce - Premium Electronics Store</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    <style>
        .hero-gradient { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <header class="bg-white shadow-sm border-b sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <h1 class="text-2xl font-bold text-blue-600">EliteCommerce</h1>
                <div class="flex items-center space-x-4">
                    <input type="text" placeholder="Search products..." class="border rounded-lg px-3 py-2 w-64">
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Cart (0)</button>
                    <a href="/admin" class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Admin</a>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-gradient h-96 flex items-center justify-center text-white">
        <div class="text-center max-w-4xl px-4">
            <h2 class="text-5xl font-bold mb-4">Premium Electronics & Tech</h2>
            <p class="text-xl mb-8 opacity-90">Discover the latest in technology with unbeatable prices and quality</p>
            <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Shop Now
            </button>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex justify-between items-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900">Shop by Category</h3>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6" id="categories-grid">
            <!-- Categories will be loaded here -->
        </div>
    </section>

    <!-- Products Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-8">Featured Products</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="products-grid">
            <!-- Products will be loaded here -->
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 mt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 class="text-2xl font-bold mb-4">EliteCommerce</h3>
            <p class="text-gray-400">Your premier destination for quality electronics and technology</p>
            <div class="mt-8 text-sm text-gray-500">
                <p>Built with React, TypeScript, Express.js & Tailwind CSS</p>
                <p>Full-stack e-commerce platform demonstration</p>
            </div>
        </div>
    </footer>

    <script>
        // Load categories
        fetch('/api/categories')
            .then(response => response.json())
            .then(categories => {
                const grid = document.getElementById('categories-grid');
                grid.innerHTML = categories.map(category => \`
                    <div class="group cursor-pointer card-hover transition-all duration-200">
                        <div class="bg-white rounded-xl p-6 shadow-sm">
                            <img src="\${category.imageUrl}" alt="\${category.name}" class="w-full h-32 object-cover rounded-lg mb-4">
                            <h4 class="font-semibold text-gray-900">\${category.name}</h4>
                            <p class="text-sm text-gray-600">\${category.productCount} products</p>
                        </div>
                    </div>
                \`).join('');
            })
            .catch(error => {
                document.getElementById('categories-grid').innerHTML = '<p class="text-red-500">Error loading categories</p>';
            });

        // Load products
        fetch('/api/products')
            .then(response => response.json())
            .then(products => {
                const grid = document.getElementById('products-grid');
                grid.innerHTML = products.map(product => \`
                    <div class="bg-white rounded-xl p-4 shadow-sm card-hover transition-all duration-200">
                        <img src="\${product.imageUrl}" alt="\${product.name}" class="w-full h-48 object-cover rounded-lg mb-4">
                        <h5 class="font-semibold text-gray-900 mb-2">\${product.name}</h5>
                        <p class="text-xs text-gray-600 mb-2">\${product.brand}</p>
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="text-lg font-bold text-gray-900">$\${product.salePrice || product.price}</span>
                                \${product.salePrice ? \`<span class="text-sm text-gray-500 line-through ml-2">$\${product.price}</span>\` : ''}
                            </div>
                            <button class="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors">
                                Add to Cart
                            </button>
                        </div>
                        \${product.stock < 10 ? \`<p class="text-xs text-orange-600 mt-2">Only \${product.stock} left!</p>\` : ''}
                    </div>
                \`).join('');
            })
            .catch(error => {
                document.getElementById('products-grid').innerHTML = '<p class="text-red-500">Error loading products</p>';
            });
    </script>
</body>
</html>
  `);
});

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(\`🚀 EliteCommerce is now running at http://localhost:\${port}\`);
  console.log(\`📱 Visit http://localhost:\${port} to see your website\`);
  console.log(\`👨‍💼 Admin dashboard: http://localhost:\${port}/admin\`);
});