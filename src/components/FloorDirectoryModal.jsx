import React from 'react';
import { X, Layers, MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FLOORS } from '../data/products';

export default function FloorDirectoryModal({ isOpen, onClose, onSelectFloorFilter }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white">Sajan Clothings Floor Directory</h2>
              <p className="text-xs text-slate-400">4-Floor Fashion Store Breakdown & Aisle Guide</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Floor List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {FLOORS.map((floor) => (
            <div 
              key={floor.level}
              className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3 hover:border-amber-500/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700/60 pb-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shadow-md">
                    F{floor.level}
                  </span>
                  <h3 className="font-extrabold text-white text-base">{floor.title}</h3>
                </div>

                <button
                  onClick={() => {
                    onSelectFloorFilter(`Floor ${floor.level}`);
                    onClose();
                  }}
                  className="self-start sm:self-auto text-xs font-bold text-amber-400 hover:text-white bg-amber-500/10 hover:bg-amber-500 px-3 py-1.5 rounded-lg border border-amber-500/20 transition-all flex items-center gap-1"
                >
                  <span>Filter Floor {floor.level} Clothes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {floor.description}
              </p>

              {/* Aisles */}
              <div className="flex flex-wrap gap-2 pt-1">
                {floor.aisles.map((aisle, idx) => (
                  <span 
                    key={idx}
                    className="text-[11px] font-semibold text-slate-300 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-700/80 flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {aisle}
                  </span>
                ))}
              </div>

              {/* Manager Contact */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-400" />
                  Elevator & Trial Fitting Rooms
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Phone className="w-3 h-3 text-emerald-400" />
                  Trial Desk: {floor.managerContact}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-400">
          📍 Station Road, Main Market, Chalisgaon - 424101, Dist. Jalgaon, Maharashtra
        </div>

      </div>
    </div>
  );
}
