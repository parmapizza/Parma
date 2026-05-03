"use client";

import React from "react";
import { motion, Variants } from "motion/react";

const testimonials = [
  { 
    id: 1, 
    name: "İrem", 
    role: "Google Yorumları", 
    comment: "Pizza boyutları gayet güzeldi. Malzemeden kaçılmamış bol bir şekilde konulmuştu. Sunum çok güzel. Personelleri çok güler yüzlü ve ilgiliydi. Konumu gayet iyi bir yerde. Teşekkür ederiz.", 
    rating: 5 
  },
  { 
    id: 2, 
    name: "Betül", 
    role: "Google Yorumları", 
    comment: "Yoldan geçerken gördüm ve inanılmaz beğendim. Bağcılar'da bu tarz güzel pizzası olan bir yer keşfetmem çok mutlu etti beni. İnce pizza seviyorsanız net tercih etmelisiniz. Çalışanlara teşekkür ederim. :)", 
    rating: 5 
  },
  { 
    id: 3, 
    name: "Utku", 
    role: "Google Yorumları", 
    comment: "Bağcılar tarafında böyle bir ortam gerçekten başarılı; kendine has bir havası var. Pizzalar şahane, ilk defa balıklı bir pizza yedim ve bu kadar beğeneceğimi tahmin bile etmiyordum. Tadı hala damağımda!", 
    rating: 5 
  },
];

const Testimonials = () => {
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0]
      } 
    }
  };

  return (
    // KRİTİK DÜZELTME: id="comments" olan yeri id="testimonials" yaptık
    <section className="py-16 bg-slate-50 overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Başlık Alanı */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">
            Misafirlerimizin <span className="text-red-600">Yorumları</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#2D5A27] mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* Kartlar Alanı */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[85%] md:min-w-full snap-center bg-white p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-slate-200 flex flex-col justify-between"
            >
              <div>
                {/* 5 Yıldız Alanı */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index * 0.1) + 0.3 }}
                  className="flex mb-4 gap-0.5"
                >
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="mask mask-star-2 w-5 h-5 bg-red-600"
                    />
                  ))}
                </motion.div>
                
                <p className="text-slate-700 font-medium italic mb-6 leading-relaxed text-sm md:text-base">
                  "{item.comment}"
                </p>
              </div>

              {/* Kullanıcı Bilgisi */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                <div className="w-10 h-10 bg-[#2D5A27] rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white border-2 border-white/10 shadow-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-none mb-1 text-sm md:text-base">{item.name}</h4>
                  <div className="flex items-center gap-1">
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobil Kaydırma İpucu */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-center text-slate-400 text-[10px] mt-4 md:hidden uppercase tracking-widest animate-pulse"
        >
          ← Deneyimleri Kaydırın →
        </motion.p>
      </div>
    </section>
  );
};

export default Testimonials;