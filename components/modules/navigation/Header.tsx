"use client";
import { useState, useEffect } from "react";
import LogoImg from "@/assets/logo.webp";
import Logo from "@/components/ui/Logo";
import { motion } from "motion/react";
import { House, Info, UtensilsCrossed, MessageSquare, Menu, Phone } from 'lucide-react';
import MobileMenu from "./MobileMenu";
import CompanyData from "@/config/CompanyData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(currentScroll > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);

    if (id === "hero") {
      // Sayfayı en başa sıfırlar ve URL'deki kalıntıları temizler
      window.location.href = "/"; 
      // Veya yenilemeden sadece en başa atmak istersen: window.scrollTo(0, 0);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "hero", label: "Ana Sayfa", icon: <House size={18} /> },
    { id: "about", label: "Biz Kimiz", icon: <Info size={18} /> },
    { id: "services", label: "Hizmetlerimiz", icon: <UtensilsCrossed size={18} /> },
    { id: "testimonials", label: "Yorumlar", icon: <MessageSquare size={18} /> },
  ];

  return (
    <>
      <header 
        className={`fixed left-0 w-full z-[100] transition-all duration-500 top-0 py-2 ${
          isScrolled 
          ? "bg-[#0a1a08]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-1" 
          : "bg-white/40 backdrop-blur-md py-4"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LOGO AREA - Tıklayınca Sayfayı Sıfırlar */}
{/* LOGO AREA */}
<motion.div 
  animate={{ 
    // Mobilde (default) biraz daha büyük, masaüstünde (lg) daha kontrollü scale
    // 1.15 mobilde etkileyici durur, 1.0 masaüstünde bozulmayı engeller
    scale: isScrolled ? 0.85 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? 1.15 : 1.0),
  }}
  className="flex-shrink-0 cursor-pointer relative z-[110]"
  onClick={() => scrollToSection("hero")}
>
  {/* Kapsayıcı boyutlarını daraltarak resmin gereksiz büyümesini önlüyoruz.
      Masaüstünde md:w-24 (96px) netlik için idealdir.
  */}
  <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
    
    {/* 1. KATMAN: GENİŞ YUMUŞAK IŞIMA */}
    <div className={`absolute inset-0 rounded-full blur-[35px] transition-all duration-700 ${
      isScrolled 
      ? "bg-white/20 scale-100" 
      : "bg-white/40 scale-[1.4]" 
    }`} />
    
    {/* 2. KATMAN: YOĞUN MERKEZ IŞIĞI */}
    <div className={`absolute w-full h-full rounded-full blur-xl transition-all duration-500 ${
      isScrolled 
      ? "bg-white/40" 
      : "bg-white/70" 
    }`} />

    {/* LOGO BİLEŞENİ */}
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      <Logo 
        imageUrl={LogoImg.src} 
        priority={true} 
        // Logo içindeki Image bileşenine netlik için müdahale
        className="transform-gpu" 
      />
    </div>

  </div>
</motion.div>

            {/* MASAÜSTÜ NAVİGASYON */}
            <nav className={`hidden lg:flex items-center border px-8 py-3 rounded-full transition-all duration-300 ${
              isScrolled 
              ? "bg-white/5 border-white/10" 
              : "bg-black/5 border-black/5"
            }`}>
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`relative flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] transition-all group ${
                        isScrolled ? "text-white" : "text-slate-900"
                      } hover:text-red-600`}
                    >
                      <span className="text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* SAĞ TARAF AKSİYONLAR */}
            <div className="flex items-center gap-3">
              <a 
                href={`tel:${CompanyData.phone}`}
                className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-black uppercase text-[12px] tracking-wider transition-all active:scale-95 shadow-lg"
              >
                <Phone size={16} />
                Sipariş Hattı
              </a>

              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-3 rounded-2xl transition-all active:scale-90 shadow-sm ${
                  isScrolled ? "bg-red-600 text-white" : "bg-white text-slate-900 border border-slate-200"
                }`}
              >
                <Menu size={24} />
              </button>
            </div>

          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navLinks={navLinks}
        scrollToSection={scrollToSection}
      />
    </>
  );
}