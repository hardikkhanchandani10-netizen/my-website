import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';

export default function Footer({ setIsFloorModalOpen, onSelectDepartment }) {

  const handleQuickLinkClick = (dept) => {
    if (onSelectDepartment) {
      onSelectDepartment(dept);
    }
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLocationClick = () => {
    const el = document.getElementById('visit-chalisgaon');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-amber-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-brand-500/20">
                S
              </div>
              <div>
                <span className="font-extrabold text-white text-base block">Sajan Clothings</span>
                <span className="text-[11px] text-amber-400 font-semibold">& Kapil Traders Superstore</span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Premier family fashion and superstore shopping in Chalisgaon. Quality casuals, formal suits, bridal ethnic wear, and multi-floor superstore supplies.
            </p>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>In-Store Shopping & Direct Pickup Only</span>
            </div>
          </div>

          {/* Quick Links Section as requested */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-slate-300 font-medium">
              <li>
                <button 
                  onClick={() => handleQuickLinkClick("Men's Casual & Formal")}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>• Men's Wear (Casual & Formal)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleQuickLinkClick("Women's & Traditional Collection")}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>• Women's Collection (Anarkali & Sarees)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleQuickLinkClick("Kids & Teen Wear")}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>• Kids & Teen Wear</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleQuickLinkClick("Men's Ethnic & Festive")}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>• Festive & Wedding Wear</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleQuickLinkClick("All Departments")}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>• New Arrivals Collection</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={handleLocationClick}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-400 font-bold"
                >
                  <span>• Store Location & Directions</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Store Hours & Timings */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">Store Timings & Address</h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>Station Road, Main Market, Chalisgaon - 424101, Dist. Jalgaon</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>10:00 AM to 9:30 PM (Open 7 Days)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 98765 43210</span>
              </p>
            </div>
          </div>

          {/* Connect & Direct WhatsApp */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">Store Visit Support</h4>
            <p className="text-slate-400 leading-relaxed text-xs">
              Planning a store visit or inquiring about outfit trial availability? Connect directly with our trial desk on WhatsApp.
            </p>

            <a
              href="https://wa.me/919876543210?text=Hello%20Sajan%20Clothings%20Chalisgaon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-4 py-2.5 rounded-xl transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>

        </div>

        {/* Store Disclaimer & Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 space-y-3 text-center sm:text-left">
          
          {/* Disclaimer as explicitly requested */}
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 text-[11px] sm:text-xs leading-relaxed text-center">
            <strong className="text-amber-400 font-extrabold">Disclaimer:</strong> "Sajan Clothings Chalisgaon is an offline apparel store. Prices and stock subject to in-store verification."
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs pt-2">
            <p>© {new Date().getFullYear()} Sajan Clothings Chalisgaon. All rights reserved.</p>
            <div className="flex items-center gap-3 text-[11px]">
              <span>In-Store Fitting Available</span>
              <span>•</span>
              <span>Chalisgaon, Maharashtra</span>
              <span>•</span>
              <span>Self-Pickup Store</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
