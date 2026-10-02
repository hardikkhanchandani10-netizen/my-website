import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Users, 
  Shirt, 
  Scissors, 
  Gift, 
  ExternalLink,
  Navigation,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function StoreInfoSection() {
  const mapSearchUrl = "https://www.google.com/maps/search/?api=1&query=Sajan+Clothings+Station+Road+Chalisgaon+Jalgaon";

  return (
    <section id="visit-chalisgaon" className="py-16 bg-slate-950 border-t border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Background Subtle Accent Lights */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Store Visit & Location Guide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Visit Sajan Clothings in Chalisgaon
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Experience 4 floors of premier family fashion and superstore shopping in the heart of Chalisgaon.
          </p>
        </div>

        {/* 1. In-Store Shopping Experience Highlights Grid */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center sm:text-left">
            Why Shop In-Person At Sajan Clothings?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Highlight 1: Multi-Category Family Shopping */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-amber-500/40 transition-all group hover:-translate-y-1 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-white text-base">Multi-Category Family Shopping</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Complete wardrobe collection under one roof for Men, Women, Teens, and Kids — from casual everyday wear to royal bridal silk.
              </p>
            </div>

            {/* Highlight 2: Trial Rooms & Fit Assistance */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-brand-500/40 transition-all group hover:-translate-y-1 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Shirt className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-white text-base">Dedicated Trial Rooms & Fit Assistance</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Spacious trial fitting rooms on Floor 1 & Floor 2 equipped with style advisors to ensure your outfits look & feel perfect.
              </p>
            </div>

            {/* Highlight 3: In-House Alteration Service */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-emerald-500/40 transition-all group hover:-translate-y-1 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Scissors className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-white text-base">In-House Alteration & Customization</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                On-the-spot custom master tailoring and fitting adjustments available for all purchased trousers, shirts, and festive wear.
              </p>
            </div>

            {/* Highlight 4: Festive & Wedding Discounts */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-purple-500/40 transition-all group hover:-translate-y-1 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Gift className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-white text-base">Festive, Wedding & Bulk Discounts</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Special volume discount tiers for wedding trousseau, festival group buys, and bulk retail purchases at checkout.
              </p>
            </div>

          </div>
        </div>

        {/* 2. Store Location & Timing Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Prominent Address & Working Hours Info Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border border-slate-800 shadow-2xl">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Store Address & Landmark</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-white leading-snug">
                Sajan Clothings
              </h3>
              <p className="text-sm sm:text-base font-semibold text-slate-200 leading-relaxed">
                Main Market / Station Road, Chalisgaon - 424101, Dist. Jalgaon, Maharashtra
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 border-y border-slate-800/80 text-xs">
              {/* Working Hours */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Clock className="w-4 h-4" />
                  <span>Store Working Hours</span>
                </div>
                <p className="font-extrabold text-white text-sm">10:00 AM to 9:30 PM</p>
                <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Open 7 Days a Week
                </p>
              </div>

              {/* Landmark & Parking */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-brand-400 font-bold">
                  <Navigation className="w-4 h-4" />
                  <span>Landmark & Parking</span>
                </div>
                <p className="font-bold text-slate-200 text-xs">Near City Railway Station</p>
                <p className="text-[11px] text-slate-400">Free Customer Parking Available</p>
              </div>
            </div>

            {/* Direct Call-To-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="tel:+919876543210"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-amber-600 hover:from-brand-500 hover:to-amber-500 text-white font-extrabold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-xl shadow-brand-600/30 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store Now</span>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hello%20Sajan%20Clothings%20Chalisgaon,%20I%20am%20planning%20a%20store%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-xl shadow-emerald-900/30 transition-all hover:scale-[1.02] active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>

          </div>

          {/* Embedded Google Maps Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-4 rounded-3xl space-y-4 border border-slate-800 shadow-2xl relative overflow-hidden">
              
              {/* Maps Visual Graphic Placeholder */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
                {/* Background Map Styling Simulation */}
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                
                <div className="relative z-10 text-center space-y-3 p-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-brand-600 text-white flex items-center justify-center mx-auto shadow-2xl shadow-brand-500/40 animate-bounce">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-base">Sajan Clothings Chalisgaon</h4>
                    <p className="text-xs text-slate-400">Station Road, Chalisgaon Market</p>
                  </div>
                </div>

                {/* Map Overlay Button */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <a
                    href={mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl shadow-xl flex items-center gap-1.5 transition-transform hover:scale-105"
                  >
                    <span>View Map Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Action Link to Google Maps */}
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-extrabold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
