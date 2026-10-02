import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "Why is Sajan Clothings an in-store trial and offline pickup store?",
    a: "Sajan Clothings Chalisgaon focuses on providing an authentic fitting room experience. By encouraging in-store trials, we ensure every customer gets the exact fit, fabric comfort, and alteration tailoring before purchase."
  },
  {
    q: "Can I try on outfits before purchasing?",
    a: "Yes! Sajan Clothings features spacious trial fitting rooms on Floor 1 (Men's Casuals), Floor 2 (Men's Ethnic), Floor 3 (Women's Wear), and Floor 4 (Kids Wear) with style advisors and in-house master tailoring."
  },
  {
    q: "How do volume and festive discounts work at checkout?",
    a: "Our product cards display single standard estimated retail prices. When you purchase multiple outfits for wedding trousseaus, festival group buys, or family celebrations, our checkout counter applies volume tier discounts."
  },
  {
    q: "How does the 'Try-On List' bag work?",
    a: "You can click 'Save to Try-On List' on any clothing card. The list automatically organizes items by Floor location (Floor 1-4). You can print the list or send it to our Chalisgaon WhatsApp trial desk so our floor team can pre-assemble items before your store visit."
  },
  {
    q: "Where is Sajan Clothings located in Chalisgaon?",
    a: "We are located at Station Road, Main Market, Chalisgaon - 424101, Dist. Jalgaon, Maharashtra (Near Railway Station). We are open 7 days a week from 10:00 AM to 9:30 PM."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-400 uppercase">
          <HelpCircle className="w-4 h-4" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Sajan Clothings FAQs & Store Policies
        </h2>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full p-4 sm:p-5 text-left font-bold text-white text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-800/50 transition-colors"
            >
              <span>{faq.q}</span>
              <ChevronDown className={`w-4 h-4 text-amber-400 shrink-0 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
            </button>

            {openIdx === idx && (
              <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 pt-3 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
