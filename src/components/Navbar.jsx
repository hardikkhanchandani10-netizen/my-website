import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  ChevronDown, 
  Menu, 
  X, 
  MessageSquare, 
  Layers, 
  Shirt, 
  Sparkles, 
  Heart, 
  Smile 
} from 'lucide-react';
import { DEPARTMENTS } from '../data/products';

export default function Navbar({ 
  searchQuery, 
  setSearchQuery, 
  selectedDepartment, 
  setSelectedDepartment, 
  wishlistCount, 
  setIsWishlistOpen,
  setIsFloorModalOpen 
}) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const megaMenuRef = useRef(null);

  // Close mega menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setIsMegaMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categoryIcons = {
    "Men's Casual & Formal": <Shirt className="w-4 h-4 text-amber-500" />,
    "Men's Ethnic & Festive": <Sparkles className="w-4 h-4 text-amber-500" />,
    "Women's & Traditional Collection": <Heart className="w-4 h-4 text-rose-500" />,
    "Kids & Teen Wear": <Smile className="w-4 h-4 text-cyan-400" />
  };

  const handleSelectCategory = (dept) => {
    setSelectedDepartment(dept);
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Brand Logo - Pure Sajan Clothings */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-amber-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none group-hover:text-brand-500 transition-colors">
                  Sajan Clothings
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-md">
                  Chalisgaon
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Premier Family Fashion Store</p>
            </div>
          </a>
        </div>

        {/* Category Mega Menu Trigger */}
        <div className="hidden lg:relative lg:block" ref={megaMenuRef}>
          <button
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3.5 py-2 rounded-xl text-sm font-semibold transition-all border border-slate-700 shadow-sm"
          >
            <Shirt className="w-4 h-4 text-brand-500" />
            <span>Clothing Categories</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Mega Menu Dropdown */}
          {isMegaMenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-[420px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="mb-3 px-2 flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Fashion Departments</span>
                <button 
                  onClick={() => handleSelectCategory('All Departments')}
                  className="text-xs text-brand-500 hover:underline font-medium"
                >
                  View All Apparel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DEPARTMENTS.filter(d => d !== 'All Departments').map((dept) => (
                  <button
                    key={dept}
                    onClick={() => handleSelectCategory(dept)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                      selectedDepartment === dept
                        ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {categoryIcons[dept] || <Shirt className="w-4 h-4 text-slate-400" />}
                    <span className="truncate">{dept}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Global Centralized Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clothes, fabrics, or styles (e.g. Sherwani, Kurti, Cotton shirt, Jeans)..."
              className="w-full bg-slate-800/90 text-slate-100 placeholder-slate-400 text-xs sm:text-sm pl-10 pr-10 py-2.5 rounded-xl border border-slate-700/80 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Floor Map Button */}
          <button
            onClick={() => setIsFloorModalOpen(true)}
            className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-amber-400 bg-slate-800/70 hover:bg-slate-800 rounded-xl border border-slate-700/60 transition-colors"
            title="View Store Floors Map"
          >
            <Layers className="w-4 h-4 text-amber-500" />
            <span>Store Floors</span>
          </button>

          {/* Chat on WhatsApp */}
          <a
            href="https://wa.me/919876543210?text=Hello%20Sajan%20Clothings%20Chalisgaon,%20I%20have%20an%20inquiry%20regarding%20clothing%20availability."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-900/30"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>

          {/* Try-On List Drawer Trigger */}
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="relative flex items-center gap-2 bg-gradient-to-r from-brand-600 to-amber-600 hover:from-brand-500 hover:to-amber-500 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg shadow-brand-600/20 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Try-On List</span>
            <span className="sm:hidden">Bag</span>
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-white text-slate-900 text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {wishlistCount}
              </span>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 p-4 space-y-4 animate-in slide-in-from-top">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase">Clothing Departments</span>
            <button
              onClick={() => setIsFloorModalOpen(true)}
              className="text-xs font-bold text-amber-400 flex items-center gap-1"
            >
              <Layers className="w-3.5 h-3.5" /> Store Floor Map
            </button>
          </div>

          <div className="grid grid-cols-1 gap-1.5">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => handleSelectCategory(dept)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold flex items-center justify-between ${
                  selectedDepartment === dept
                    ? 'bg-brand-500 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span>{dept}</span>
                {selectedDepartment === dept && <Sparkles className="w-3.5 h-3.5" />}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex gap-2">
            <a
              href="https://wa.me/919876543210?text=Hello%20Sajan%20Clothings%20Chalisgaon,%20I%20have%20a%20clothing%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white py-2 rounded-xl text-xs font-bold"
            >
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
