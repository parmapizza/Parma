import AboutSection from "@/components/modules/home/AboutSection";
import HeroSection from "@/components/modules/home/HeroSection";
import InfoTicker from "@/components/modules/home/InfoTicker";
import ServicesSection from "@/components/modules/home/ServicesSection";
import Testimonials from "@/components/modules/home/Testimonials";
import Footer from "@/components/modules/navigation/Footer";

export default function Home() {
  // Pizzacı konseptine uygun, güven veren ve iştah açan mesajlar
  const infoTickerMessages = [
    "🍕 Odun Ateşinde Gerçek İtalyan Pizzası",
    "🛵 Bağcılar Geneline Hızlı Paket Servis",
    "🌿 Günlük Taze Hazırlanan El Yapımı Hamur",
    "💳 Kapıda Kredi Kartı ve NFC ile Ödeme İmkanı",
    "👨‍👩‍👧‍👦 Ailenizle Keyifli Vakit Geçirebileceğiniz Sıcak Ortam",
    "✨ Hijyen Standartlarına %100 Uygun Hazırlık"
  ];

  return (
    // scroll-pt-[80px] ekledik (Header yüksekliğine göre ayarla)
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scroll-pt-12">
      
      {/* Hero + Ticker Bölümü */}
      <section className="snap-start min-h-[110svh] md:min-h-full shrink-0 flex flex-col">
          <HeroSection />
        <InfoTicker items={infoTickerMessages} key={'Info Ticker'} interval={2000} />
      </section>

      {/* Diğer Bölümler */}
      <section className="snap-start min-h-[150svh] md:min-h-full shrink-0 bg-base-100 pt-10" id="2">
        <AboutSection />
      </section>

      <section className="snap-start min-h-[20svh] md:min-h-full shrink-0 bg-base-100" id="3">
        <ServicesSection />
      </section>

      <section className="snap-start min-h-[150svh] md:min-h-full pt-2 shrink-0 bg-slate-50" id="4">
        <Testimonials />
      </section>
{/* Footer Bölümü */}
<section className="snap-start min-h-[170svh] shrink-0 bg-slate-900 flex items-center justify-center overflow-hidden">
  <div className="w-full"> {/* İçeriği sarmalaması için */}
    <Footer />
  </div>
</section>
    </main>
  );
}