import React from 'react';
import { Layers, ShieldCheck, ArrowRight, Sparkles, Shirt, Scissors, Tag } from 'lucide-react';

export default function HeroSection({ onExploreClick, setIsFloorModalOpen }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 lg:py-16 border-b border-slate-800/80">
      
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Chalisgaon's Premier Family Apparel Destination</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Sajan Clothings <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-brand-500">
                Chalisgaon
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore 4 expansive floors of men's casuals, formal suits, royal ethnic sherwanis, Banarasi silk sarees, designer Anarkalis, and kids festive wear. Dedicated trial fitting rooms & in-house master tailoring.
            </p>

            {/* Core Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-2.5">
                <Shirt className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Trial Fitting Rooms</h4>
                  <p className="text-[11px] text-slate-400">Floors 1, 2 & 3</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-2.5">
                <Scissors className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Master Tailoring</h4>
                  <p className="text-[11px] text-slate-400">In-House Alterations</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Volume Discounts</h4>
                  <p className="text-[11px] text-slate-400">Wedding & Festive</p>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="flex items-center gap-2 bg-gradient-to-r from-brand-600 via-orange-600 to-amber-600 hover:from-brand-500 hover:to-amber-500 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm shadow-xl shadow-brand-600/30 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Browse Clothing Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsFloorModalOpen(true)}
                className="flex items-center gap-2 bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white font-extrabold px-5 py-3.5 rounded-xl text-sm border border-slate-700 transition-all hover:border-amber-500/50"
              >
                <Layers className="w-4 h-4 text-amber-400" />
                <span>View Fashion Floor Map</span>
              </button>
            </div>

          </div>

          {/* Right Column: Fashion Superstore Visual Directory */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-6 rounded-3xl relative overflow-hidden shadow-2xl">
              
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-amber-400">Store Layout</span>
                  <h3 className="text-lg font-extrabold text-white">4-Floor Fashion Directory</h3>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
              </div>

              {/* Floor Mini Previews */}
              <div className="space-y-3">
                
                <div className="p-3 rounded-xl bg-slate-800/80 border border-amber-500/30 flex items-center justify-between hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 font-extrabold text-xs flex items-center justify-center border border-amber-500/30">
                      F1
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white">Men's Casuals & Denim</h4>
                      <p className="text-[11px] text-slate-400">Casual Shirts, Jeans, Trousers & Trial Rooms</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-1 rounded">Trial Rooms</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 font-extrabold text-xs flex items-center justify-center border border-rose-500/30">
                      F2
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white">Men's Ethnic & Groom Royal</h4>
                      <p className="text-[11px] text-slate-400">Silk Kurtas, Nehru Jackets, Sherwanis</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-rose-400 bg-rose-400/10 px-2 py-1 rounded">Groom Studio</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 font-extrabold text-xs flex items-center justify-center border border-blue-500/30">
                      F3
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white">Women's Ethnic & Sarees</h4>
                      <p className="text-[11px] text-slate-400">Anarkalis, Banarasi Sarees, Cotton Kurtis</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">Saree Studio</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 font-extrabold text-xs flex items-center justify-center border border-purple-500/30">
                      F4
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white">Kids & Teen Fashion World</h4>
                      <p className="text-[11px] text-slate-400">Junior Kurta Dhotis, Frocks & Lehengas</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-purple-400 bg-purple-400/10 px-2 py-1 rounded">Kids World</span>
                </div>

              </div>

              {/* Station Road Location Badge */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="text-amber-400 font-semibold">📍 Station Road, Main Market, Chalisgaon</span>
                <span className="text-emerald-400 font-bold">Open 10 AM – 9:30 PM</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
