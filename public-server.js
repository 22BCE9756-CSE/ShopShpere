const express = require('express');
const app = express();

// Mock data for the EliteCommerce website
const categories = [
  { id: "cat-1", name: "Laptops", description: "High-performance laptops", productCount: 5, imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop" },
  { id: "cat-2", name: "Smartphones", description: "Latest mobile devices", productCount: 8, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop" },
  { id: "cat-3", name: "Audio", description: "Premium audio equipment", productCount: 6, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" },
  { id: "cat-4", name: "Gaming", description: "Gaming gear and accessories", productCount: 4, imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop" }
];

const products = [
  { id: "prod-1", name: "MacBook Pro 16\" M2 Pro", brand: "Apple", price: 2499, salePrice: 2299, stock: 15, imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop" },
  { id: "prod-2", name: "iPhone 15 Pro Max", brand: "Apple", price: 1199, stock: 8, imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop" },
  { id: "prod-3", name: "Sony WH-1000XM5", brand: "Sony", price: 399, salePrice: 349, stock: 12, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" },
  { id: "prod-4", name: "Dell XPS 13", brand: "Dell", price: 1299, stock: 6, imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop" },
  { id: "prod-5", name: "Samsung Galaxy S24 Ultra", brand: "Samsung", price: 1299, salePrice: 1199, stock: 4, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop" },
  { id: "prod-6", name: "Gaming Mouse Pro", brand: "Logitech", price: 89, stock: 25, imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop" }
];

app.use(express.json());

// API endpoints
app.get('/api/categories', (req, res) => res.json(categories));
app.get('/api/products', (req, res) => res.json(products));

// Main website route
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EliteCommerce - Premium Electronics Store</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .hero-gradient { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); }
        .card-hover:hover { transform: translateY(-4px); transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(0,0,0,0.15); }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <h1 class="text-2xl font-bold text-blue-600">EliteCommerce</h1>
                    <span class="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Live Demo</span>
                </div>
                <div class="flex items-center space-x-4">
                    <input type="text" placeholder="Search products..." 
                           class="border border-gray-300 rounded-lg px-4 py-2 w-48 focus:ring-2 focus:ring-blue-500"
                           id="search-input">
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Cart (<span id="cart-count">0</span>)
                    </button>
                    <a href="/admin" class="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">Admin</a>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-gradient text-white py-20">
        <div class="max-w-4xl mx-auto text-center px-4">
            <h2 class="text-5xl font-bold mb-6">Premium Electronics & Tech</h2>
            <p class="text-xl mb-8 opacity-90">Discover cutting-edge technology with unbeatable prices and exceptional quality</p>
            <button onclick="scrollToProducts()" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Shop Now
            </button>
        </div>
    </section>

    <!-- Categories -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 class="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6" id="categories-grid">
            <!-- Categories loaded via JavaScript -->
        </div>
    </section>

    <!-- Products -->
    <section id="products-section" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <h3 class="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="products-grid">
            <!-- Products loaded via JavaScript -->
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 class="text-2xl font-bold mb-4">EliteCommerce</h3>
            <p class="text-gray-400 mb-4">Your premier destination for quality electronics</p>
            <div class="text-sm text-gray-500">
                <p>Full-stack demo built with Express.js + Modern Frontend</p>
                <p>Ready for interview presentation</p>
            </div>
        </div>
    </footer>

    <script>
        let cart = [];

        // Load categories
        fetch('/api/categories')
            .then(response => response.json())
            .then(categories => {
                document.getElementById('categories-grid').innerHTML = categories.map(cat => \`
                    <div class="bg-white rounded-xl p-6 shadow-sm card-hover cursor-pointer">
                        <img src="\${cat.imageUrl}" alt="\${cat.name}" class="w-full h-32 object-cover rounded-lg mb-4">
                        <h4 class="font-semibold text-gray-900">\${cat.name}</h4>
                        <p class="text-sm text-gray-600">\${cat.productCount} products</p>
                    </div>
                \`).join('');
            });

        // Load products
        fetch('/api/products')
            .then(response => response.json())
            .then(products => {
                document.getElementById('products-grid').innerHTML = products.map(product => \`
                    <div class="bg-gray-50 rounded-xl p-4 shadow-sm card-hover">
                        <img src="\${product.imageUrl}" alt="\${product.name}" class="w-full h-48 object-cover rounded-lg mb-4">
                        <h5 class="font-semibold text-gray-900 mb-2">\${product.name}</h5>
                        <p class="text-sm text-gray-600 mb-3">\${product.brand}</p>
                        <div class="flex items-center justify-between mb-3">
                            <div>
                                <span class="text-lg font-bold text-gray-900">$\${product.salePrice || product.price}</span>
                                \${product.salePrice ? \`<span class="text-sm text-gray-500 line-through ml-2">$\${product.price}</span>\` : ''}
                            </div>
                        </div>
                        <button onclick="addToCart('\${product.id}', '\${product.name}', \${product.salePrice || product.price})" 
                                class="w-full bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Add to Cart
                        </button>
                        \${product.stock < 10 ? \`<p class="text-xs text-orange-600 mt-2">Only \${product.stock} left!</p>\` : ''}
                    </div>
                \`).join('');
            });

        function addToCart(id, name, price) {
            cart.push({ id, name, price });
            document.getElementById('cart-count').textContent = cart.length;
            event.target.textContent = 'Added!';
            event.target.classList.add('bg-green-600');
            setTimeout(() => {
                event.target.textContent = 'Add to Cart';
                event.target.classList.remove('bg-green-600');
                event.target.classList.add('bg-blue-600');
            }, 1000);
        }

        function scrollToProducts() {
            document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
        }
    </script>
</body>
</html>
  `);
});

// Admin route
app.get('/admin', (req, res) => {
  res.send(\`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EliteCommerce Admin Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="min-h-screen">
        <header class="bg-gray-900 text-white shadow-lg">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <h1 class="text-xl font-bold">EliteCommerce Admin Dashboard</h1>
                    <a href="/" class="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Back to Store</a>
                </div>
            </div>
        </header>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-sm font-medium text-gray-500">Total Revenue</h3>
                    <p class="text-3xl font-bold text-gray-900">$24,580</p>
                    <span class="text-green-600 text-sm">+12% this month</span>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-sm font-medium text-gray-500">Orders</h3>
                    <p class="text-3xl font-bold text-gray-900">156</p>
                    <span class="text-green-600 text-sm">+8% this month</span>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-sm font-medium text-gray-500">Products</h3>
                    <p class="text-3xl font-bold text-gray-900">\${products.length}</p>
                    <span class="text-blue-600 text-sm">\${categories.length} categories</span>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-sm font-medium text-gray-500">Low Stock</h3>
                    <p class="text-3xl font-bold text-orange-600">\${products.filter(p => p.stock < 10).length}</p>
                    <span class="text-orange-600 text-sm">need restocking</span>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow">
                <div class="px-6 py-4 border-b">
                    <h3 class="text-lg font-medium">Recent Orders</h3>
                </div>
                <div class="px-6 py-4">
                    <div class="space-y-4">
                        <div class="flex justify-between items-center py-3 border-b">
                            <div>
                                <p class="font-medium">#001 - John Smith</p>
                                <p class="text-sm text-gray-500">MacBook Pro + iPhone • $3,698</p>
                            </div>
                            <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Completed</span>
                        </div>
                        <div class="flex justify-between items-center py-3 border-b">
                            <div>
                                <p class="font-medium">#002 - Sarah Wilson</p>
                                <p class="text-sm text-gray-500">Sony Headphones • $349</p>
                            </div>
                            <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Processing</span>
                        </div>
                        <div class="flex justify-between items-center py-3">
                            <div>
                                <p class="font-medium">#003 - Mike Johnson</p>
                                <p class="text-sm text-gray-500">Gaming Setup • $1,587</p>
                            </div>
                            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Shipped</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
  \`);
});

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(\`EliteCommerce is running on port \${port}\`);
  console.log(\`Public URL: https://\${process.env.REPL_SLUG || 'your-repl'}-\${process.env.REPL_OWNER || 'username'}.replit.dev\`);
});