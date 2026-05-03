"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, PhoneCall, MessageCircle, ChevronUp } from "lucide-react";
import CompanyData from "@/config/CompanyData";
import LogoImg from "@/assets/logo.webp";
import Logo from "@/components/ui/Logo";

const isWhatsAppActive = false; 

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { id: string; label: string; icon: React.ReactNode }[];
  scrollToSection: (id: string) => void;
}

export default function MobileMenu({ isOpen, onClose, navLinks, scrollToSection }: MobileMenuProps) {
  
  const fastTransition = { 
    type: "spring" as const, 
    damping: 25, 
    stiffness: 250 
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={fastTransition}
          className="fixed inset-0 w-full h-screen z-[120] lg:hidden flex flex-col"
          style={{ backgroundColor: 'rgba(10, 26, 8, 0.98)' }} 
        >
          {/* Header Bölümü */}
          <div className="flex justify-between items-center p-6 border-b border-white/10 relative">
            <div className="flex items-center gap-4">
              
              {/* LOGO SARMALAYICI - BOYUT BÜYÜTÜLDÜ (w-20 h-20) */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                {/* Geniş beyaz aura */}
                <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl scale-150" />
                {/* Yoğun merkez ışığı */}
                <div className="absolute w-14 h-14 bg-white/60 rounded-full blur-xl" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Logo 
                    imageUrl={LogoImg.src} 
                    priority={true} 
                    className="transform-gpu scale-125" // Logo bileşenini içten biraz daha büyüttük
                  />
                </div>
              </div>

              {/* MARKA METNİ */}
              <div className="flex flex-col -space-y-1">
                <span className="font-black text-2xl tracking-tighter text-white">
                  PARMA <span className="text-red-600">PIZZA</span>
                </span>
                <span className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">
                  Gerçek İtalyan Lezzeti
                </span>
              </div>
            </div>

            <button 
              onClick={onClose} 
              className="p-3 bg-red-600/20 text-red-500 rounded-2xl active:scale-90 transition-transform border border-red-600/30"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menü Linkleri */}
          <motion.nav 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col justify-center gap-3 px-8"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                variants={itemVariants}
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    scrollToSection(link.id);
                  }, 150); 
                }}
                className="group flex items-center justify-between w-full p-5 rounded-2xl bg-white/5 border border-white/10 active:bg-red-600 active:text-white transition-all duration-150"
              >
                <div className="flex items-center gap-5">
                  <div className="text-red-600 group-active:text-white transition-colors">
                    {link.icon}
                  </div>
                  <span className="text-lg font-bold uppercase tracking-widest text-white group-active:text-white">
                    {link.id === "services" ? "Hizmetlerimiz" : link.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.nav>

          {/* Alt Aksiyon Alanı */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 pt-0 space-y-3"
          >
            <a 
              href={`tel:${CompanyData.phone}`} 
              className="flex items-center justify-center gap-3 w-full bg-red-600 py-5 rounded-2xl text-white font-black text-lg shadow-lg active:scale-95 transition-transform"
            >
              <PhoneCall size={20} />
              HEMEN ARA
            </a>
            
            {isWhatsAppActive && (
              <a 
                href={`https://wa.me/${CompanyData.wpphone}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] py-5 rounded-2xl text-white font-black text-lg shadow-lg active:scale-95 transition-transform"
              >
                <MessageCircle size={20} />
                WHATSAPP SİPARİŞ
              </a>
            )}

            {/* Kapatma Butonu */}
            <button 
              onClick={onClose}
              className="flex flex-col items-center justify-center w-full pt-4 pb-2 group"
            >
              <div className="flex flex-col items-center animate-bounce">
                <ChevronUp className="text-red-600/50" size={24} />
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">KAPAT</span>
              </div>
              <div className="h-1.5 w-16 bg-white/10 rounded-full mt-3 group-active:bg-red-600 transition-colors"></div>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}