import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statik çıktı için çıktı modunu belirliyoruz
  output: 'export',

  // React Compiler'ı aktif ediyoruz (Performans için harika)
  reactCompiler: true,

  images: {
    // Statik export'ta resim optimizasyonu sunucu taraflı yapılamaz, bu yüzden unoptimized ŞART.
    unoptimized: true,
  },

  experimental: {
    // Sadece kullanılan ikon paketlerini build'e dahil ederek bundle size'ı düşürür.
    optimizePackageImports: ['react-icons', 'lucide-react', 'lucide-react/icons'],
  },

  // Bazı tarayıcı uyumlulukları için (Opsiyonel)
  trailingSlash: true,

  // Gereksiz console loglarını production build'den kaldırır (Performans için)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;