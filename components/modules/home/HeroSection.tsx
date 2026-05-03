'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import Image from "next/image";
import HERO_IMAGE_URL from "@/assets/WelcomeHero.webp"; 
import CompanyData from "@/config/CompanyData";
import WpButton from '@/components/ui/WpButton';

const isWhatsAppActive = false; 

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90svh] md:h-[95vh] overflow-hidden bg-black" id='hero'>
      
      {/* ARKA PLAN */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE_URL}
          alt={`${CompanyData.companyName} Hero`}
          fill
          priority
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
          className="object-cover animate-slow-zoom"
          quality={75}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* İÇERİK KATMANI */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-4 sm:space-y-6"
        >
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-xl text-white font-medium drop-shadow-lg max-w-xl mx-auto"
          >
            Bağcılar'ın En <span className="text-red-600 font-bold uppercase tracking-wider">Lezzetli Pizza</span>sı
          </motion.p>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[1.1] drop-shadow-2xl"
          >
            <span className="block py-2" style={{
              background: 'linear-gradient(to right, #A6192E, #2D5A27)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))'
            }}>
              {CompanyData.companyName}
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-2xl font-bold tracking-[0.15em] text-gray-200 uppercase"
          >
            Taze • Sıcak • Odun Ateşinde
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center gap-4 pt-10" 
          >
            {/* WHATSAPP BUTONU */}
            {isWhatsAppActive && (
              <WpButton
                link={`https://wa.me/${CompanyData.wpphone}?text=Merhaba, sipariş vermek istiyorum.`}
                title="WhatsApp Sipariş"
              />
            )}

            {/* ARAMA ALANI: NUMARA + BUTON */}
            <div className="flex flex-col items-center gap-3 w-full max-w-[280px] sm:max-w-[320px]">
              
              {/* 1. NUMARA KUTUSU (Butonla Aynı Genişlikte) */}
<motion.div className="w-full h-10 flex items-center justify-center bg-green-700/90 rounded-full">
  <span className="text-white font-black text-base scale-180 origin-center">
    {CompanyData.phoneFormatted2}
  </span>
</motion.div>

              {/* 2. HEMEN ARA BUTONU */}
              <div className="relative w-full group">
                {!isWhatsAppActive && (
                  <>
                    <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-60"></span>
                  </>
                )}
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${CompanyData.phone}`}
                  className="relative flex items-center justify-center gap-3 w-full h-14 sm:h-16 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300 font-black shadow-2xl overflow-hidden"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="22" 
                    height="22" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="animate-pulse"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-lg sm:text-xl uppercase tracking-widest">
                    Hemen Sipariş Ver
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mouse Scroll İkonu */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block z-20 opacity-50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-red-600 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;