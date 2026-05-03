"use client";

import React from "react";
import { Phone, Instagram, MapPin, Navigation } from "lucide-react";
import CompanyData from "@/config/CompanyData";

const MobileStickyFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden">
      {/* Glassy Konteyner: 
          bg-white/75 ve backdrop-blur-xl ile Header dokusunu yakaladık.
          border-white/20 ile daha yumuşak bir sınır çizdik.
      */}
      <div className="bg-white/75 backdrop-blur-xl border-t border-white/20 px-4 py-3 shadow-[0_-8px_30px_rgb(0,0,0,0.08)]">
        <div className="flex items-center justify-between gap-3">
          
          {/* ARAMA BUTONU */}
          <a
            href={`tel:${CompanyData.phone}`}
            className="flex flex-col items-center justify-center flex-1 py-2.5 bg-red-600 text-white rounded-2xl active:scale-90 transition-all shadow-lg shadow-red-600/20 gap-1"
          >
            <Phone size={18} fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-tighter">Ara</span>
          </a>

          {/* INSTAGRAM */}
          <a
            href={CompanyData.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center flex-1 py-2.5 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-2xl active:scale-90 transition-all shadow-lg shadow-pink-600/20 gap-1"
          >
            <Instagram size={18} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Instagram</span>
          </a>

          {/* ADRES */}
          <a
            href={CompanyData.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center flex-1 py-2.5 bg-green-700 text-white rounded-2xl active:scale-90 transition-all shadow-lg shadow-green-700/20 gap-1"
          >
            <MapPin size={18} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Adres</span>
          </a>

          {/* YOL TARİFİ */}
          <a
            href={CompanyData.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center flex-1 py-2.5 bg-slate-900 text-white rounded-2xl active:scale-90 transition-all shadow-lg shadow-slate-900/20 gap-1"
          >
            <Navigation size={18} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Konum</span>
          </a>

        </div>
      </div>
      
      {/* iPhone Home Indicator Area - Glassy Devamı */}
      <div className="h-[env(safe-area-inset-bottom)] bg-white/75 backdrop-blur-xl"></div>
    </div>
  );
};

export default MobileStickyFooter;