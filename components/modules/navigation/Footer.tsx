'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Instagram, MapPin } from 'lucide-react';
import CompanyData from '@/config/CompanyData';
import LOGO_URL from "@/assets/logo.webp"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // 'hidden lg:flex' kaldırıldı, yerine her cihazda görünmesi için 'flex' eklendi.
    // Mobilde min-h değeri küçültüldü (min-h-[700px] -> min-h-fit)
    <footer className="flex flex-col justify-center w-full min-h-fit bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        
        {/* Grid yapısı: mobilde 1 sütun, masaüstünde 4 sütun */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          
          {/* SOL SÜTUN: LOGO VE MİSYON */}
          <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="relative w-24 h-24 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
                <Image 
                  src={LOGO_URL} 
                  alt={CompanyData.companyName} 
                  fill 
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter italic leading-none" style={{
                background: 'linear-gradient(to right, #ffffff 33%, #22c55e 33% 66%, #ef4444 66%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.4))'
              }}>
                {CompanyData.companyName.toUpperCase()}
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-400">
              Bağcılar'ın kalbinde, odun ateşinde pişmiş gerçek pizza lezzeti.
            </p>
          </div>

          {/* ORTA SÜTUN: HARİTA (Mobilde yükseklik düşürüldü) */}
          <div className="lg:col-span-2 flex flex-col items-center gap-6 w-full">
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.5em] flex items-center gap-2 bg-red-600/10 text-red-500 px-6 py-2.5 rounded-full border border-red-900/20">
              <MapPin size={16} /> ŞUBEMİZE BEKLERİZ
            </h3>
            <div className="w-full h-[300px] lg:h-[450px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden border-[4px] lg:border-[6px] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative group transform transition-all duration-700 hover:border-red-900/30">
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.566729145691!2d28.864065477246253!3d41.034734117793626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7fe955f80d%3A0x4fb75a1bb938f54c!2sParma%20Pizza!5e0!3m2!1str!2str!4v1777476392604!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Parma Pizza Konum"
                className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none rounded-[2rem] lg:rounded-[2.5rem] ring-1 ring-inset ring-white/10"></div>
            </div>
          </div>

          {/* SAĞ SÜTUN: İLETİŞİM */}
          <div className="space-y-10 lg:pl-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="space-y-6 w-full">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Sipariş & Rezervasyon</h3>
              <div className="space-y-8">
                <a 
                  href={`tel:${CompanyData.phone}`} 
                  className="flex flex-col lg:flex-row items-center gap-5 group text-slate-300 hover:text-white transition-all"
                >
                  <div className="p-5 bg-slate-800 rounded-3xl group-hover:bg-red-600 transition-all shadow-2xl group-hover:scale-110 group-hover:rotate-12">
                    <Phone size={32} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Hemen Ara</span>
                    <span className="font-black text-2xl lg:text-3xl tracking-tighter leading-none">{CompanyData.phoneFormatted}</span>
                  </div>
                </a>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-slate-400">
                  <div className="p-3 bg-slate-800 rounded-xl shrink-0">
                    <MapPin size={22} />
                  </div>
                  <address className="not-italic text-base leading-snug">
                    {CompanyData.address}
                  </address>
                </div>
              </div>
            </div>

            {/* SOSYAL MEDYA */}
            <div className="flex flex-col w-full gap-4">
               <a 
                href={CompanyData.links.instagram} 
                target="_blank" 
                className="flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-2xl font-black text-lg hover:shadow-[0_15px_30px_rgba(238,42,123,0.3)] transition-all active:scale-95"
              >
                <Instagram size={24} />
                Instagram'da Biz
              </a>
            </div>
          </div>
        </div>

        {/* ALT BİLGİ */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] lg:tracking-[0.4em] text-slate-600 gap-4 text-center">
          <p>© {currentYear} {CompanyData.companyName}</p>
          <p className="text-red-900/40">Premium Pizza Experience</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;