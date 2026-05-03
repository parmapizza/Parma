const CompanyData = {
    // Temel Bilgiler
    companyName: 'Parma Pizza',
    phone: '02125696347',
    phoneFormatted2: '0212 569 63 47',
    wpphone: '02125696347',
    phoneFormatted: '+90 212 569 63 47', // Linkler ve görünüm için
    topHeader: 'İstanbul / Bağcılar',
    address: 'Çınar, Esenler Cd. n31/C, 34000 Bağcılar/İstanbul', // Google Haritalar ve SEO için
    
    // SEO ve Link Yapısı
    // Domain aldığında burayı güncelle (Örn: https://www.parmapizza.com)
    baseUrl: 'https://www.parmapizzatr.com', 
    
    // Sosyal Medya ve İletişim Linkleri
    links: {
        whatsapp: 'https://wa.me/902125696347?text=Merhaba, lezzetli bir pizza siparişi vermek istiyorum!',
        instagram: 'https://instagram.com/parmapizzatr', // Varsa kullanıcı adın
        googleMaps: 'https://www.google.com/maps/place/Parma+Pizza/@41.034734,28.8617695,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabb7fe955f80d:0x4fb75a1bb938f54c!8m2!3d41.0347301!4d28.8666404!16s%2Fg%2F11ycgmw5zf?hl=uk&entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D', // Google işletme kaydının linki
    },

    // Metadata İçerikleri
    seo: {
        title: "Parma Pizza | Bağcılar'ın En Lezzetli Pizzası",
        description: "Bağcılar'da taze malzemeler ve odun ateşinde pişen gerçek pizza lezzeti. Hemen arayın ve sipariş verin!",
        ogImage: '/og-image.png', // Public klasöründeki paylaşım görseli
        keywords: "bağcılar pizza, istanbul pizza, en yakın pizzacı, paket servis pizza, parma pizza",
    }
}

export default CompanyData;