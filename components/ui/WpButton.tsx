import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import whatsappIcon from '@/assets/icons/whatsapp.png';

interface WhatsAppButonProps {
  title: string;
  link: string;
}

const WhatsAppButon: React.FC<WhatsAppButonProps> = ({ title, link }) => {
  return (
    <Link 
      href={link}
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group w-full sm:w-auto"
    >
      {/* Sol Taraf: WhatsApp İkonu */}
      <div className="relative w-6 h-6 lg:w-8 lg:h-8">
        <Image 
          src={whatsappIcon} // .src yerine direkt import nesnesini kullanmak daha iyidir
          alt="WhatsApp"
          fill
          sizes="(max-width: 1024px) 24px, 32px" // Uyarıyı çözen kritik satır
          className="object-contain"
        />
      </div>

      {/* Sağ Taraf: Başlık */}
      <span className="font-bold text-sm lg:text-lg tracking-wide uppercase">
        {title}
      </span>
    </Link>
  );
};

export default WhatsAppButon;