'use client';
import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => {
  return (
    <div className="services-item group flex flex-col items-center bg-white border border-green-800/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-[#2D5A27] hover:shadow-2xl hover:-translate-y-2 cursor-pointer shadow-sm">
      
      {/* İkon Dairesi - Logodaki Kırmızı Tonuyla Uyumlu */}
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-red-50 group-hover:bg-red-600 transition-colors duration-300 mb-5 md:mb-6 shadow-inner">
        <div className="text-[#A6192E] text-3xl md:text-4xl group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* Başlık - Okunabilirlik için Koyu Gri, Hover'da Beyaz */}
      <h3 className="text-base md:text-lg font-extrabold text-slate-800 text-center group-hover:text-white transition-colors duration-300 leading-tight">
        {title}
      </h3>

      {/* Dekoratif Çizgi - Hover'da belirir */}
      <div className="w-0 group-hover:w-10 h-1 bg-red-500 mt-3 rounded-full transition-all duration-500"></div>
    </div>
  );
};

export default ServiceCard;