// Simple EliteCommerce server that serves your website directly
const express = require('express');
const app = express();

// Mock data for demonstration
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

// API Routes
app.get('/api/categories', (req, res) => res.json(categories));
app.get('/api/products', (req, res) => res.json(products));

// Serve the EliteCommerce website
app.get('*', (req, res) => {
  // Handle admin route
  if (req.path === '/admin') {
    return res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EliteCommerce Admin - Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="min-h-screen">
        <!-- Admin Header -->
        <header class="bg-gray-900 text-white shadow-lg">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <h1 class="text-xl font-bold">EliteCommerce Admin</h1>
                    <a href="/" class="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Back to Store</a>
                </div>
            </div>
        </header>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-sm font-medium text-gray-500">Total Revenue</h3>
                    <p class="text-3xl font-bold text-gray-900">$24,580</p>
                    <span class="text-green-600 text-sm">+12% from last month</span>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-sm font-medium text-gray-500">Total Orders</h3>
                    <p class="text-3xl font-bold text-gray-900">156</p>
                    <span class="text-green-600 text-sm">+8% from last month</span>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-sm font-medium text-gray-500">Products</h3>
                    <p class="text-3xl font-bold text-gray-900">${products.length}</p>
                    <span class="text-blue-600 text-sm">${categories.length} categories</span>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-sm font-medium text-gray-500">Low Stock Alert</h3>
                    <p class="text-3xl font-bold text-orange-600">${products.filter(p => p.stock < 10).length}</p>
                    <span class="text-orange-600 text-sm">products need restocking</span>
                </div>
            </div>

            <!-- Recent Orders -->
            <div class="bg-white rounded-lg shadow">
                <div class="px-6 py-4 border-b border-gray-200">
                    <h3 class="text-lg font-medium text-gray-900">Recent Orders</h3>
                </div>
                <div class="px-6 py-4">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between py-3 border-b">
                            <div>
                                <p class="font-medium">#ORD-001 - John Smith</p>
                                <p class="text-sm text-gray-500">2 items • $2,648 • Just now</p>
                            </div>
                            <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Completed</span>
                        </div>
                        <div class="flex items-center justify-between py-3 border-b">
                            <div>
                                <p class="font-medium">#ORD-002 - Sarah Wilson</p>
                                <p class="text-sm text-gray-500">1 item • $349 • 2 minutes ago</p>
                            </div>
                            <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Processing</span>
                        </div>
                        <div class="flex items-center justify-between py-3">
                            <div>
                                <p class="font-medium">#ORD-003 - Mike Johnson</p>
                                <p class="text-sm text-gray-500">3 items • $1,587 • 5 minutes ago</p>
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
    `);
  }

  // Serve main EliteCommerce website
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EliteCommerce - Premium Electronics Store</title>
    <meta name="description" content="Discover premium electronics and technology at EliteCommerce. Shop laptops, smartphones, audio equipment, and gaming gear with unbeatable prices.">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .hero-gradient { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); }
        .card-hover:hover { transform: translateY(-4px); transition: all 0.3s ease; }
        .fade-in { animation: fadeIn 0.5s ease-in; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <header class="bg-white shadow-sm border-b sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <h1 class="text-2xl font-bold text-blue-600">EliteCommerce</h1>
                    <span class="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Premium</span>
                </div>
                <div class="flex items-center space-x-4">
                    <input type="text" placeholder="Search products..." 
                           class="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                           id="search-input">
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                        🛒 Cart (<span id="cart-count">0</span>)
                    </button>
                    <a href="/admin" class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                        👨‍💼 Admin
                    </a>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-gradient h-96 flex items-center justify-center text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="text-center max-w-4xl px-4 relative z-10 fade-in">
            <h2 class="text-5xl font-bold mb-4">Premium Electronics & Tech</h2>
            <p class="text-xl mb-8 opacity-90">Discover the latest in technology with unbeatable prices and quality</p>
            <button onclick="scrollToProducts()" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Shop Now →
            </button>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex justify-between items-center mb-8">
            <h3 class="text-3xl font-bold text-gray-900">Shop by Category</h3>
            <p class="text-gray-600">Find exactly what you're looking for</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6" id="categories-grid">
            <!-- Categories will be loaded here -->
        </div>
    </section>

    <!-- Products Section -->
    <section id="products-section" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex justify-between items-center mb-8">
            <h3 class="text-3xl font-bold text-gray-900">Featured Products</h3>
            <div class="flex space-x-2">
                <button onclick="filterProducts('all')" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">All</button>
                <button onclick="filterProducts('sale')" class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">On Sale</button>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="products-grid">
            <!-- Products will be loaded here -->
        </div>
    </section>

    <!-- Features Section -->
    <section class="bg-white py-16 mt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">Why Choose EliteCommerce?</h3>
                <p class="text-gray-600 max-w-2xl mx-auto">We provide the best shopping experience with premium products and exceptional service</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">🚚</span>
                    </div>
                    <h4 class="text-xl font-semibold mb-2">Free Shipping</h4>
                    <p class="text-gray-600">Free shipping on all orders over $100</p>
                </div>
                <div class="text-center">
                    <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">🔒</span>
                    </div>
                    <h4 class="text-xl font-semibold mb-2">Secure Payment</h4>
                    <p class="text-gray-600">Your payment information is always protected</p>
                </div>
                <div class="text-center">
                    <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">⭐</span>
                    </div>
                    <h4 class="text-xl font-semibold mb-2">Premium Quality</h4>
                    <p class="text-gray-600">Only the highest quality products make it to our store</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-2xl font-bold mb-4">EliteCommerce</h3>
                    <p class="text-gray-400 mb-4">Your premier destination for quality electronics and technology</p>
                    <div class="flex space-x-4">
                        <span class="text-2xl cursor-pointer hover:text-blue-400">📧</span>
                        <span class="text-2xl cursor-pointer hover:text-blue-400">📱</span>
                        <span class="text-2xl cursor-pointer hover:text-blue-400">🐦</span>
                    </div>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Shop</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white">Laptops</a></li>
                        <li><a href="#" class="hover:text-white">Smartphones</a></li>
                        <li><a href="#" class="hover:text-white">Audio</a></li>
                        <li><a href="#" class="hover:text-white">Gaming</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Support</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white">Contact Us</a></li>
                        <li><a href="#" class="hover:text-white">Shipping Info</a></li>
                        <li><a href="#" class="hover:text-white">Returns</a></li>
                        <li><a href="#" class="hover:text-white">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Technical Stack</h4>
                    <ul class="space-y-2 text-gray-400 text-sm">
                        <li>React 18 + TypeScript</li>
                        <li>Express.js Backend</li>
                        <li>Tailwind CSS</li>
                        <li>Full-stack Architecture</li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                <p>&copy; 2024 EliteCommerce. Built for interview demonstration purposes.</p>
            </div>
        </div>
    </footer>

    <script>
        let cart = [];
        let allProducts = [];

        // Load categories
        fetch('/api/categories')
            .then(response => response.json())
            .then(categories => {
                const grid = document.getElementById('categories-grid');
                grid.innerHTML = categories.map(category => \`
                    <div class="group cursor-pointer card-hover transition-all duration-300 fade-in">
                        <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl">
                            <img src="\${category.imageUrl}" alt="\${category.name}" 
                                 class="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform">
                            <h4 class="font-semibold text-gray-900 text-lg">\${category.name}</h4>
                            <p class="text-sm text-gray-600">\${category.productCount} products</p>
                            <p class="text-xs text-gray-500 mt-1">\${category.description}</p>
                        </div>
                    </div>
                \`).join('');
            })
            .catch(() => {
                document.getElementById('categories-grid').innerHTML = '<p class="text-red-500 col-span-4 text-center">Unable to load categories</p>';
            });

        // Load products
        fetch('/api/products')
            .then(response => response.json())
            .then(products => {
                allProducts = products;
                renderProducts(products);
            })
            .catch(() => {
                document.getElementById('products-grid').innerHTML = '<p class="text-red-500">Unable to load products</p>';
            });

        function renderProducts(products) {
            const grid = document.getElementById('products-grid');
            grid.innerHTML = products.map(product => \`
                <div class="bg-white rounded-xl p-4 shadow-sm card-hover transition-all duration-300 fade-in">
                    <div class="relative">
                        <img src="\${product.imageUrl}" alt="\${product.name}" 
                             class="w-full h-48 object-cover rounded-lg mb-4">
                        \${product.salePrice ? '<span class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">SALE</span>' : ''}
                    </div>
                    <h5 class="font-semibold text-gray-900 mb-2 text-lg">\${product.name}</h5>
                    <p class="text-sm text-gray-600 mb-3">\${product.brand}</p>
                    <div class="flex items-center justify-between mb-3">
                        <div>
                            <span class="text-xl font-bold text-gray-900">$\${product.salePrice || product.price}</span>
                            \${product.salePrice ? \`<span class="text-sm text-gray-500 line-through ml-2">$\${product.price}</span>\` : ''}
                        </div>
                    </div>
                    <button onclick="addToCart('\${product.id}', '\${product.name}', \${product.salePrice || product.price})" 
                            class="w-full bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                        Add to Cart
                    </button>
                    \${product.stock < 10 ? \`<p class="text-xs text-orange-600 mt-2 text-center">⚠️ Only \${product.stock} left in stock!</p>\` : ''}
                </div>
            \`).join('');
        }

        function addToCart(id, name, price) {
            cart.push({ id, name, price });
            document.getElementById('cart-count').textContent = cart.length;
            
            // Show success message
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = '✓ Added!';
            button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
            button.classList.add('bg-green-600');
            
            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('bg-green-600');
                button.classList.add('bg-blue-600', 'hover:bg-blue-700');
            }, 1500);
        }

        function filterProducts(type) {
            if (type === 'all') {
                renderProducts(allProducts);
            } else if (type === 'sale') {
                renderProducts(allProducts.filter(p => p.salePrice));
            }
        }

        function scrollToProducts() {
            document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
        }

        // Search functionality
        document.getElementById('search-input').addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = allProducts.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.brand.toLowerCase().includes(query)
            );
            renderProducts(filtered);
        });
    </script>
</body>
</html>
  `);
});

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(\`\`);
  console.log(\`🚀 EliteCommerce is now LIVE at http://localhost:\${port}\`);
  console.log(\`📱 Visit http://localhost:\${port} to see your website\`);
  console.log(\`👨‍💼 Admin dashboard: http://localhost:\${port}/admin\`);
  console.log(\`\`);
  console.log(\`✅ Your EliteCommerce website is ready!\`);
  console.log(\`\`);
});