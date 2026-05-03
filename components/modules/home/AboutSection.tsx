'use client'
import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'motion/react'
import { PhoneCall } from 'lucide-react'
import CompanyData from '@/config/CompanyData'
import pizzaShopImg from '@/assets/parmapizza.webp' 

// AYAR: WhatsApp butonunu buradan kontrol edebilirsin
const isWhatsAppActive = false;

const AboutSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } 
    }
  }

  return (
    <section className="py-12 lg:py-20 bg-base-100 overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* SOL TARAF: İçerik Alanı */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="space-y-4">
              <motion.div variants={itemVariants} className="space-y-2 text-center lg:text-left">
                <h2 className="text-red-600 font-bold tracking-wide uppercase text-sm pt-10">Gerçek İtalyan Lezzeti</h2>
                <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                  Bağcılar'da <span className="text-green-700">Odun Ateşinde</span> <br /> 
                  Geleneksel Pizza Deneyimi
                </h3>
                <p className="text-lg text-slate-600">
                  Çınar Mahallesi'nde, ailenizle birlikte huzurlu bir atmosferde en taze malzemelerle hazırlanan pizzalarımızın tadını çıkarın.
                </p>
              </motion.div>

              {/* MOBİLDE GÖRÜNEN RESİM */}
              <motion.div 
                variants={itemVariants}
                className="block lg:hidden relative h-[350px] w-full my-6"
              >
                <div className="absolute inset-0 bg-green-800/10 rounded-2xl rotate-2 -z-10"></div>
                <Image 
                  src={pizzaShopImg}
                  alt="Parma Pizza Bağcılar"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                  sizes="100vw"
                />
              </motion.div>

              {/* İŞLETME ÖZELLİKLERİ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  { title: "Hızlı Teslimat", desc: "Adrese servis ve temassız teslimat seçenekleri.", icon: "🛵" },
                  { title: "Aile Ortamı", desc: "Çocuklara uygun, rahat ve sessiz bir atmosfer.", icon: "👨‍👩‍👧‍👦" },
                  { title: "Her Öğüne Uygun", desc: "Öğle yemeği, akşam yemeği ve atıştırmalıklar.", icon: "🍕" },
                  { title: "Kolay Ödeme", desc: "Kredi kartı, banka kartı ve NFC ile ödeme imkanı.", icon: "💳" }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="card bg-slate-50 p-4 shadow-sm border-l-4 border-green-700"
                  >
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <span className="text-2xl">{feature.icon}</span> {feature.title}
                    </h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* BUTONLAR: Dalga Efekti Kaldırıldı */}
              <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                
                {isWhatsAppActive ? (
                  <a 
                    href={`https://wa.me/${CompanyData.wpphone}?text=Merhaba, sipariş vermek istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-5 rounded-2xl font-black text-lg shadow-xl transition-all active:scale-95 group"
                  >
                    <PhoneCall className="group-hover:rotate-12 transition-transform" size={24} />
                    WHATSAPP İLE SİPARİŞ
                  </a>
                ) : (
                  <a 
                    href={`tel:${CompanyData.phone}`}
                    className="relative z-10 flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl transition-all active:scale-95 group w-full sm:w-auto"
                  >
                    <PhoneCall className="group-hover:shake-animation transition-transform" size={24} />
                    HEMEN SİPARİŞ VER (ARA)
                  </a>
                )}

                <div className="flex items-center gap-2 px-6 py-4 bg-green-50 text-green-800 rounded-2xl font-bold border border-green-100">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  İçeride Servis & Masaya Hizmet
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* SAĞ TARAF: MASAÜSTÜ RESİM */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="hidden lg:block w-1/2 relative h-[600px]"
          >
            <motion.div 
              animate={{ rotate: [-2, -4, -2], scale: [1, 1.01, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-green-800/10 rounded-3xl -rotate-2 -z-10"
            ></motion.div>
            
            <Image 
              src={pizzaShopImg}
              alt="Parma Pizza İç Mekan"
              fill
              className="object-cover rounded-3xl shadow-2xl transition-transform hover:scale-[1.01] duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection