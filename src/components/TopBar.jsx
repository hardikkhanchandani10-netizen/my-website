import React from 'react';
import { MapPin, Clock, Phone, AlertCircle, Shirt } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800">
      {/* STRICT NO DELIVERY & IN-STORE TRIAL BANNER */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white font-bold py-2 px-4 text-center shadow-inner flex items-center justify-center gap-2 tracking-wide text-xs sm:text-sm animate-pulse-glow">
        <AlertCircle className="w-4 h-4 shrink-0" />
        <span>STRICTLY IN-STORE SHOPPING & DIRECT TRIAL PICKUP ONLY. WE DO NOT PROVIDE HOME DELIVERY.</span>
      </div>

      {/* Top Utility Bar Info */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        <div className="flex flex-wrap items-center gap-4 text-slate-400">
          <div className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-brand-500" />
            <span>Station Road, Main Market, Chalisgaon - 424101, Dist. Jalgaon</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-500" />
            <span>Working Hours: 10:00 AM – 9:30 PM (Open 7 Days a Week)</span>
          </div>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden sm:flex items-center gap-1 text-amber-400 font-semibold">
            <Shirt className="w-3.5 h-3.5 text-amber-400" />
            <span>Trial Fitting Rooms Available</span>
          </div>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-500" />
            <span>+91 98765 43210</span>
          </a>
        </div>
      </div>
    </div>
  );
}
