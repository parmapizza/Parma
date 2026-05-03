import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/modules/navigation/Header";
import CompanyData from "@/config/CompanyData";
import MobileStickyFooter from "@/components/modules/navigation/MobileStickyFooter";
import Footer from "@/components/modules/navigation/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#A6192E', 
};

export const metadata: Metadata = {
  title: {
    default: CompanyData.seo.title,
    template: `%s | ${CompanyData.companyName}`
  },
  description: CompanyData.seo.description,
  keywords: CompanyData.seo.keywords,
  authors: [{ name: CompanyData.companyName }],
  creator: CompanyData.companyName,
  publisher: CompanyData.companyName,
  
  // İkon Tanımlamaları
  icons: {
    icon: [
      { url: '/favicon.ico' }, // Tarayıcı sekmeleri
      { url: '/icon.png', sizes: '96x96', type: 'image/png' }, // Google arama sonuçları
    ],
    apple: [
      { url: '/apple-touch-icon.png' }, // iPhone ana ekran (Eğer eklediysen)
    ],
  },

  formatDetection: {
    telephone: true,
  },
  
  openGraph: {
    title: CompanyData.seo.title,
    description: CompanyData.seo.description,
    url: CompanyData.baseUrl,
    siteName: CompanyData.companyName,
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: CompanyData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${CompanyData.companyName} Bağcılar`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: CompanyData.seo.title,
    description: CompanyData.seo.description,
    images: [CompanyData.seo.ogImage],
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="tr" className="scroll-smooth"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white`}
        cz-shortcut-listen="true"
      >
        {/* 1. ÜST MENÜ: Sayfanın en üstünde sabit durur */}
        <Header />
        
        {/* 2. ANA İÇERİK: Header ve Footer arasındaki tüm sayfa içeriği */}
        <main className="relative flex-grow overflow-x-hidden">
          {children}
        </main>

        {/* 3. MASAÜSTÜ FOOTER: 
            Sayfanın en altında normal akışta durur (Sadece büyük ekranlarda görünür) */}

        {/* 4. MOBİL STICKY MENÜ: 
            Ekrana yapışık (fixed) olduğu için en sona koymak z-index yönetimi için en sağlıklısıdır */}
        <MobileStickyFooter />

      </body>
    </html>
  );
}