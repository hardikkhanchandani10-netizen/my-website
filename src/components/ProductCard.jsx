import React from 'react';
import { ShoppingBag, MessageSquare, Eye, Check, Tag, MapPin, Sparkles } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onAddToWishlist, 
  isInWishlist, 
  onQuickView 
}) {

  // WhatsApp pre-filled link
  const whatsappText = encodeURIComponent(
    `Hello Sajan Clothings & Kapil Traders! I am inquiring about the item: "${product.title}" (Price: ₹${product.price}, SKU: ${product.sku}, Fabric: ${product.fabric}). Is my size available in-store on ${product.floor}?`
  );
  const whatsappUrl = `https://wa.me/919876543210?text=${whatsappText}`;

  return (
    <div className="group glass-card rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full relative border border-slate-800 hover:border-brand-500/50 shadow-lg hover:shadow-2xl hover:shadow-brand-500/10">
      
      {/* Product Image Container with Hover Zoom */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-950">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />

        {/* Gradient Overlay for badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start gap-2 z-10">
          {/* Fabric / Material Tag */}
          <span className="bg-slate-900/90 backdrop-blur-md text-slate-200 border border-slate-700/80 px-2.5 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1 shadow-md">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{product.fabric}</span>
          </span>

          {/* Department Tag */}
          <span className="bg-brand-600/90 text-white font-extrabold px-2.5 py-1 rounded-lg text-[10px] tracking-wide uppercase shadow-md">
            {product.category}
          </span>
        </div>

        {/* In-Store Fitting Available Badge */}
        {product.fittingAvailable ? (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="bg-emerald-500/90 backdrop-blur-md text-white font-bold px-2.5 py-1 rounded-lg text-[11px] flex items-center gap-1 shadow-lg">
              <Check className="w-3.5 h-3.5" />
              <span>In-Store Fitting Available</span>
            </span>
          </div>
        ) : (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="bg-amber-500/90 backdrop-blur-md text-slate-950 font-bold px-2.5 py-1 rounded-lg text-[11px] flex items-center gap-1 shadow-lg">
              <Tag className="w-3.5 h-3.5" />
              <span>Wholesale Bulk Available</span>
            </span>
          </div>
        )}

        {/* Quick View Button Overlay */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-slate-900/80 hover:bg-brand-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-xl border border-white/20 z-20"
          title="Quick View Details"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>

      {/* Card Details Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        
        <div>
          {/* Brand & Floor Location */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-bold text-amber-400 tracking-wide uppercase">{product.brand}</span>
            <span className="flex items-center gap-1 text-[11px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
              <MapPin className="w-3 h-3 text-brand-400" />
              <span className="truncate max-w-[120px]">{product.floor.split('-')[0]}</span>
            </span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-bold text-white text-sm sm:text-base line-clamp-2 hover:text-brand-400 cursor-pointer transition-colors leading-snug"
          >
            {product.title}
          </h3>
        </div>

        {/* Single Price Tag & Volume Pricing Note */}
        <div className="pt-2 border-t border-slate-800">
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] font-medium text-slate-400">Standard Price</span>
          </div>
          
          <p className="text-[11px] text-amber-400/90 font-medium italic mt-0.5 flex items-center gap-1">
            <span>• {product.volumePricingNote}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 space-y-2">
          
          {/* Save to Try-On / Pickup List Button */}
          <button
            onClick={() => onAddToWishlist(product)}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              isInWishlist
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                : 'bg-brand-600 hover:bg-brand-500 text-white shadow-md shadow-brand-600/20 active:scale-95'
            }`}
          >
            {isInWishlist ? (
              <>
                <Check className="w-4 h-4" />
                <span>Saved to Try-On List</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Save to Try-On List</span>
              </>
            )}
          </button>

          {/* Enquire Size on WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-xl text-xs font-bold bg-slate-800 hover:bg-emerald-600/20 text-slate-200 hover:text-emerald-400 border border-slate-700 hover:border-emerald-500/50 flex items-center justify-center gap-2 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Enquire Size on WhatsApp</span>
          </a>

        </div>

      </div>

    </div>
  );
}
