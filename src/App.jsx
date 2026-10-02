import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import TryOnDrawer from './components/TryOnDrawer';
import FloorDirectoryModal from './components/FloorDirectoryModal';
import StoreInfoSection from './components/StoreInfoSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isFloorModalOpen, setIsFloorModalOpen] = useState(false);
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState(null);

  // LocalStorage state for Wishlist / Try-On List
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('sajan_kapil_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sajan_kapil_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error("Failed to save wishlist to localStorage", e);
    }
  }, [wishlist]);

  // Wishlist item IDs list for quick check
  const wishlistIds = wishlist.map(item => item.id);

  // Add / Toggle item in wishlist
  const handleAddToWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      } else {
        const defaultSize = product.sizes?.[0] || 'M';
        return [...prev, { ...product, quantity: 1, selectedSize: defaultSize }];
      }
    });
  };

  // Update Item Quantity in Drawer
  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setWishlist(prev =>
      prev.map(item => item.id === productId ? { ...item, quantity: newQty } : item)
    );
  };

  // Update Item Size in Drawer
  const handleUpdateSize = (productId, newSize) => {
    setWishlist(prev =>
      prev.map(item => item.id === productId ? { ...item, selectedSize: newSize } : item)
    );
  };

  // Remove single item
  const handleRemoveItem = (productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  // Clear entire wishlist
  const handleClearWishlist = () => {
    setWishlist([]);
  };

  // Scroll to catalog section
  const handleScrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col antialiased">
      
      {/* Top Bar with Strict No Delivery Announcement & Chalisgaon Superstore Info */}
      <TopBar />

      {/* Main Navbar */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        wishlistCount={wishlist.reduce((acc, item) => acc + item.quantity, 0)}
        setIsWishlistOpen={setIsWishlistOpen}
        setIsFloorModalOpen={setIsFloorModalOpen}
      />

      {/* Hero Section */}
      <HeroSection
        onExploreClick={handleScrollToCatalog}
        setIsFloorModalOpen={setIsFloorModalOpen}
      />

      {/* Main Product Catalog Section */}
      <main className="flex-1">
        <ProductCatalog
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          onAddToWishlist={handleAddToWishlist}
          wishlistIds={wishlistIds}
          onQuickView={(prod) => setSelectedQuickViewProduct(prod)}
        />

        {/* Store Pickup Guidelines & Information */}
        <StoreInfoSection />

        {/* Customer FAQs & Policies */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        setIsFloorModalOpen={setIsFloorModalOpen}
        onSelectDepartment={setSelectedDepartment}
      />

      {/* Try-On & Pickup Wishlist Drawer */}
      <TryOnDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onUpdateQuantity={handleUpdateQuantity}
        onUpdateSize={handleUpdateSize}
        onRemoveItem={handleRemoveItem}
        onClearWishlist={handleClearWishlist}
      />

      {/* Quick View Product Modal */}
      {selectedQuickViewProduct && (
        <ProductModal
          product={selectedQuickViewProduct}
          onClose={() => setSelectedQuickViewProduct(null)}
          onAddToWishlist={handleAddToWishlist}
          isInWishlist={wishlistIds.includes(selectedQuickViewProduct.id)}
        />
      )}

      {/* Store Floor Directory Modal */}
      <FloorDirectoryModal
        isOpen={isFloorModalOpen}
        onClose={() => setIsFloorModalOpen(false)}
        onSelectFloorFilter={(floorName) => {
          setSelectedDepartment('All Departments');
          handleScrollToCatalog();
        }}
      />

    </div>
  );
}
