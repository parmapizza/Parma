"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Pizza } from "lucide-react";

interface InfoTickerProps {
  items: string[];
  interval?: number;
}

const InfoTicker = ({ items, interval = 4000 }: InfoTickerProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items, interval]);

  return (
    // Arka planı Parma Kırmızısı (#A6192E) yaptık
    <div className="w-full bg-[#A6192E] border-y border-white/10 shadow-lg relative z-10">
      <div className="container mx-auto px-4 flex justify-center items-center min-h-[56px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="flex items-center justify-center gap-3"
          >
            {/* İştah açıcı küçük bir ikon dokunuşu */}
            <Pizza className="text-white/80 w-4 h-4 md:w-5 md:h-5 animate-pulse" />

            {/* Metin Alanı - Beyaz ve Bold */}
            <p className="text-white font-black text-center text-[12px] md:text-sm lg:text-base tracking-widest uppercase leading-none">
              {items[index]}
            </p>

            <Pizza className="text-white/80 w-4 h-4 md:w-5 md:h-5 animate-pulse" />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* İnce bir dekoratif alt çizgi (İtalyan Yeşili) */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2D5A27]/30"></div>
    </div>
  );
};

export default InfoTicker;