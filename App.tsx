
import React, { useState, useMemo, useEffect } from 'react';
import { Product, CartItem, FilterState, ViewType, Order } from './types';
import { MOCK_PRODUCTS } from './constants';
import Header from './components/Header';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import AdminDashboard from './components/AdminDashboard';

const App: React.FC = () => {
  // Navigation State (Simple Hash-based routing simulation)
  const [currentView, setCurrentView] = useState<'HOME' | 'PDP' | 'CHECKOUT' | 'SUCCESS' | 'ADMIN'>('HOME');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  // Shop State
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewType>('GRID');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  // Filters State
  const [filters, setFilters] = useState<FilterState>({
    brand: [],
    priceRange: [0, 2000],
    ram: [],
    storage: [],
    os: [],
  });

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchSearch = p.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchBrand = filters.brand.length === 0 || filters.brand.includes(p.brand);
      const matchPrice = p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
      const matchRam = filters.ram.length === 0 || filters.ram.includes(p.specs.ram);
      const matchStorage = filters.storage.length === 0 || filters.storage.includes(p.specs.storage);
      const matchOs = filters.os.length === 0 || filters.os.some(o => p.specs.os.includes(o));

      return matchSearch && matchBrand && matchPrice && matchRam && matchStorage && matchOs;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // newest/default
    });
  }, [products, searchQuery, filters, sortBy]);

  // Cart Functions
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // View Handlers
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('PDP');
    window.scrollTo(0, 0);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('CHECKOUT');
  };

  const handleOrderComplete = (order: Order) => {
    setLastOrder(order);
    setCart([]);
    setCurrentView('SUCCESS');
  };

  const resetFilters = () => {
    setFilters({
      brand: [],
      priceRange: [0, 2000],
      ram: [],
      storage: [],
      os: [],
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={() => setCurrentView('HOME')}
        onAdminClick={() => setCurrentView('ADMIN')}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="flex-grow container mx-auto px-4 py-6">
        {currentView === 'HOME' && (
          <div className="flex flex-col md:flex-row gap-6">
            <FilterSidebar 
              filters={filters} 
              setFilters={setFilters} 
              onReset={resetFilters}
            />
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                  {searchQuery ? `Search results for "${searchQuery}"` : 'All Smartphones'}
                  <span className="text-sm font-normal text-gray-500 ml-2">({filteredProducts.length} items)</span>
                </h1>
                <div className="flex items-center gap-4">
                  <select 
                    className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="newest">Newest Arrivals</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <div className="hidden sm:flex border border-gray-300 rounded-md overflow-hidden">
                    <button 
                      onClick={() => setViewMode('GRID')}
                      className={`p-2 ${viewMode === 'GRID' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                    >
                      <i className="fas fa-th-large"></i>
                    </button>
                    <button 
                      onClick={() => setViewMode('LIST')}
                      className={`p-2 ${viewMode === 'LIST' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                    >
                      <i className="fas fa-list"></i>
                    </button>
                  </div>
                </div>
              </div>
              <ProductGrid 
                products={filteredProducts} 
                viewMode={viewMode}
                onProductClick={handleProductClick}
                onAddToCart={addToCart}
              />
            </div>
          </div>
        )}

        {currentView === 'PDP' && selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onAddToCart={addToCart} 
            onBack={() => setCurrentView('HOME')}
          />
        )}

        {currentView === 'CHECKOUT' && (
          <Checkout 
            cartItems={cart} 
            onComplete={handleOrderComplete}
            onBack={() => setCurrentView('HOME')}
          />
        )}

        {currentView === 'SUCCESS' && lastOrder && (
          <OrderSuccess order={lastOrder} onHome={() => setCurrentView('HOME')} />
        )}

        {currentView === 'ADMIN' && (
          <AdminDashboard 
            products={products}
            setProducts={setProducts}
            onClose={() => setCurrentView('HOME')}
          />
        )}
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Selah.</h2>
              <p className="text-gray-400">Your destination for premium mobile experiences. Elevate your connection with the best in class smartphones.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentView('HOME')} className="hover:text-blue-400">Shop All</button></li>
                <li><button onClick={() => setCurrentView('ADMIN')} className="hover:text-blue-400">Admin Portal</button></li>
                <li><button className="hover:text-blue-400">Track Order</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-blue-400">FAQs</button></li>
                <li><button className="hover:text-blue-400">Shipping Policy</button></li>
                <li><button className="hover:text-blue-400">Return & Refunds</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-gray-800 border-none px-3 py-2 rounded flex-grow text-sm" />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Join</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Selah Smartphone Store. All rights reserved.
          </div>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default App;
