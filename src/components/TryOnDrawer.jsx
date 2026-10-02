import React from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, AlertCircle, ShoppingBag, Sparkles, MapPin } from 'lucide-react';

export default function TryOnDrawer({ 
  isOpen, 
  onClose, 
  wishlist, 
  onUpdateQuantity, 
  onUpdateSize,
  onRemoveItem, 
  onClearWishlist 
}) {
  if (!isOpen) return null;

  // Calculate total count and estimated total
  const totalItemsCount = wishlist.reduce((acc, item) => acc + item.quantity, 0);
  const totalEstimatedPrice = wishlist.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Available size options
  const DEFAULT_SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

  // Quick WhatsApp Booking Handler
  const handleWhatsAppBooking = () => {
    if (wishlist.length === 0) return;

    const itemsSummary = wishlist
      .map((item, idx) => `${idx + 1}. ${item.title} (Size: ${item.selectedSize || 'M'}, Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString('en-IN')}`)
      .join('\n');

    const message = `Hello Sajan Clothings Chalisgaon, I am interested in trying out the following styles during my store visit:\n\n${itemsSummary}\n\nTotal Estimated Price: ₹${totalEstimatedPrice.toLocaleString('en-IN')}\n\nPlease confirm available sizes and trial room booking.`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-amber-600 text-white flex items-center justify-center font-black shadow-lg shadow-brand-500/20">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-black text-white">Try-On List / Store Visit Bag</h2>
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Sajan Clothings, Chalisgaon</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Informational Store Trial Notice */}
          <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border-b border-amber-500/30 p-3.5 flex items-start gap-2.5 text-amber-300 text-xs leading-relaxed font-medium">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
            <div>
              <strong className="text-white font-extrabold block mb-0.5">In-Store Trial Room Notice:</strong>
              "Visit Sajan Clothings in Chalisgaon to try on your selected outfits in our trial rooms! Stock availability may vary."
            </div>
          </div>

          {/* Drawer Body - Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {wishlist.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center mx-auto text-2xl border border-slate-700">
                  🛍️
                </div>
                <h3 className="text-lg font-bold text-white">Your Try-On Bag is Empty</h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                  Browse our fashion collection and click "Save to Try-On List" to reserve your fitting room styles.
                </p>
              </div>
            ) : (
              wishlist.map((item) => (
                <div 
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/80 flex items-start gap-3 hover:border-brand-500/50 transition-all shadow-md"
                >
                  {/* Photo Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-24 object-cover object-top rounded-xl shrink-0 border border-slate-700"
                  />

                  {/* Item Specs & Controls */}
                  <div className="flex-1 min-w-0 space-y-2">
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider">{item.brand}</span>
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                          {item.fabric}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white truncate mt-0.5">{item.title}</h4>
                      <p className="text-xs font-black text-white mt-1">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        <span className="text-[10px] text-slate-400 font-normal ml-1">(₹{item.price} ea)</span>
                      </p>
                    </div>

                    {/* Selected Size Selector & Quantity Controls */}
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-700/60">
                      
                      {/* Size Selector */}
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 block mb-1">Select Size:</label>
                        <select
                          value={item.selectedSize || (item.sizes?.[0] || 'M')}
                          onChange={(e) => onUpdateSize(item.id, e.target.value)}
                          className="w-full bg-slate-900 text-amber-400 text-xs font-bold px-2 py-1 rounded-lg border border-slate-700 focus:outline-none focus:border-brand-500"
                        >
                          {(item.sizes || DEFAULT_SIZES).map((sz) => (
                            <option key={sz} value={sz}>{sz}</option>
                          ))}
                        </select>
                      </div>

                      {/* Quantity Controls */}
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 block mb-1">Quantity:</label>
                        <div className="flex items-center justify-between bg-slate-900 rounded-lg p-1 border border-slate-700">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-extrabold text-white">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                    </div>

                    {/* Floor & Removal */}
                    <div className="flex items-center justify-between text-[11px] pt-1">
                      <span className="text-slate-400 flex items-center gap-1 text-[10px]">
                        <MapPin className="w-3 h-3 text-brand-400" />
                        {item.floor ? item.floor.split('-')[0] : 'Floor 1'}
                      </span>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-slate-400 hover:text-rose-400 font-semibold flex items-center gap-1 text-[11px] transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>

                  </div>

                </div>
              ))
            )}

          </div>

          {/* Drawer Footer with Quick WhatsApp Booking Button */}
          {wishlist.length > 0 && (
            <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-3">
              
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Selected Try-On Outfits:</span>
                  <span className="font-bold text-white">{totalItemsCount} items</span>
                </div>
                <div className="flex justify-between text-base font-black text-white pt-0.5">
                  <span>Est. Total Trial Price:</span>
                  <span className="text-amber-400">₹{totalEstimatedPrice.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-[10px] text-slate-500 italic text-right">
                  *Volume pricing and seasonal discounts applied at Chalisgaon trial checkout
                </p>
              </div>

              {/* Quick WhatsApp Booking Button */}
              <button
                onClick={handleWhatsAppBooking}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-950/50 hover:scale-[1.01] active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Confirm Try-On Booking on WhatsApp</span>
              </button>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={onClearWishlist}
                  className="text-slate-500 hover:text-rose-400 text-xs font-semibold transition-colors"
                >
                  Clear Entire Bag
                </button>
                <span className="text-[11px] text-slate-400 font-medium">
                  Trial Rooms: Floor 1 & Floor 2
                </span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
