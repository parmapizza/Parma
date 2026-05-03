'use client';
import React from 'react';
import { motion, Variants } from 'motion/react';
import ServiceCard from '@/components/ui/ServiceCard';
import { 
  BsTruck, BsShieldCheck, BsCreditCard, 
  BsClock, BsShop, BsPeople, BsHouseHeart
} from 'react-icons/bs';
import { MdOutlineTableBar, MdChildCare, MdOutlineDeliveryDining } from 'react-icons/md';

const ServicesSection: React.FC = () => {
  // İşletme bilgilerine göre optimize edilmiş hizmetler
  const services = [
    { id: 1, title: "Adrese Servis", icon: <MdOutlineDeliveryDining /> },
    { id: 2, title: "Temassız Teslimat", icon: <BsShieldCheck /> },
    { id: 3, title: "Masaya Servis", icon: <MdOutlineTableBar /> },
    { id: 4, title: "NFC & Mobil Ödeme", icon: <BsCreditCard /> },
    { id: 5, title: "Aileler İçin Uygun", icon: <MdChildCare /> },
    { id: 6, title: "Öğle ve Akşam Yemeği", icon: <BsClock /> },
    { id: 7, title: "Paket Servis", icon: <BsShop /> },
    { id: 8, title: "Rahat & Sessiz Ortam", icon: <BsHouseHeart /> },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-base-100 overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        
        {/* Başlık Alanı - Parma Pizza Renkleri */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-[#2D5A27] font-bold uppercase tracking-[0.2em] text-sm mb-3">
            Hizmet Ayrıcalıklarımız
          </h2>
          <h3 className="text-3xl lg:text-5xl font-black text-base-content leading-tight">
            Lezzet Dolu Deneyim İçin <br className="hidden sm:block" />
            <span className="text-[#A6192E]">Kaliteli Hizmet Standartları</span>
          </h3>
          <div className="flex justify-center mt-6 items-center">
            <motion.span 
              animate={{ width: [40, 80, 40] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-1 bg-[#A6192E] rounded-full"
            ></motion.span>
            <span className="w-4 h-1 bg-[#2D5A27]/40 rounded-full mx-1"></span>
            <span className="w-2 h-1 bg-[#2D5A27]/20 rounded-full"></span>
          </div>
        </motion.div>

        {/* Kartlar Grid Yapısı */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                },
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 } 
              }}
              className="h-full"
            >
              <ServiceCard 
                title={service.title} 
                icon={service.icon} 
                // Not: ServiceCard bileşeni içinde primary renk kullanılıyorsa 
                // global CSS veya Tailwind config üzerinden primary'yi kırmızıy'a çekmek iyi olur.
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Alt Bilgi */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-base-content/60 italic text-sm">
            * Parma Pizza, hijyen ve tazelik standartlarına %100 uyum sağlar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;