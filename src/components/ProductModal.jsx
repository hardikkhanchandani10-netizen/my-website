import React, { useState } from 'react';
import { X, Check, ShoppingBag, MessageSquare, MapPin, Tag, ShieldCheck, Sparkles } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToWishlist, isInWishlist }) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || 'Default');

  const whatsappText = encodeURIComponent(
    `Hello Sajan Clothings & Kapil Traders! I am inquiring about the item: "${product.title}" (Size: ${selectedSize}, Color: ${selectedColor}, Price: ₹${product.price}, SKU: ${product.sku}). Is this currently ready for trial on ${product.floor}?`
  );
  const whatsappUrl = `https://wa.me/919876543210?text=${whatsappText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image View */}
        <div className="md:w-1/2 relative bg-slate-950 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 md:h-[480px] object-cover rounded-2xl"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">Floor Location:</span>
            <span className="font-bold text-amber-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {product.floor} ({product.aisle})
            </span>
          </div>
        </div>

        {/* Right: Product Details & Controls */}
        <div className="md:w-1/2 p-6 overflow-y-auto space-y-5 flex flex-col justify-between">
          
          <div className="space-y-4">
            
            {/* Category & SKU */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-wider bg-brand-500/10 px-2.5 py-1 rounded-lg border border-brand-500/20">
                {product.category}
              </span>
              <span className="text-xs font-mono text-slate-500">SKU: {product.sku}</span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {product.title}
            </h2>

            {/* Price & Badges */}
            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-xs text-slate-400">Standard Retail Display Price</span>
              </div>
              <p className="text-xs text-amber-400 font-medium flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" />
                <span>{product.volumePricingNote}</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {product.description}
            </p>

            {/* Fabric / Material Specs */}
            <div className="grid grid-cols-2 gap-3 py-2 text-xs border-y border-slate-800">
              <div>
                <span className="text-slate-500 font-medium">Fabric / Material:</span>
                <p className="font-bold text-slate-200 mt-0.5 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  {product.fabric}
                </p>
              </div>
              <div>
                <span className="text-slate-500 font-medium">Brand:</span>
                <p className="font-bold text-slate-200 mt-0.5">{product.brand}</p>
              </div>
            </div>

            {/* Sizes Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400">Select Size for Trial:</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        selectedSize === s
                          ? 'bg-amber-500 text-slate-950 border border-amber-400 shadow-md'
                          : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Options */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400">Available Colorways:</label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedColor === c
                          ? 'bg-brand-500 text-white border border-brand-400'
                          : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <button
              onClick={() => onAddToWishlist(product)}
              className={`w-full py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                isInWishlist
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg'
                  : 'bg-gradient-to-r from-brand-600 to-amber-600 hover:from-brand-500 hover:to-amber-500 text-white shadow-xl shadow-brand-600/30'
              }`}
            >
              {isInWishlist ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Saved in Try-On List</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>Save to Try-On / Pickup List</span>
                </>
              )}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-emerald-600/20 text-slate-200 hover:text-emerald-400 border border-slate-700 hover:border-emerald-500 flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Enquire Size ({selectedSize}) on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
