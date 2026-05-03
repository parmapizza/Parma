import Image from "next/image";

interface LogoProps {
  imageUrl?: string;
  priority?: boolean;
  className?: string; // Dışarıdan boyut müdahalesi için eklendi
}

const Logo = ({ imageUrl, priority = false, className = "" }: LogoProps) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {imageUrl && (
<Image 
  src={imageUrl} 
  alt="Parma Pizza Logo" 
  width={250} 
  height={250} 
  priority={priority}
  className="object-contain w-full h-auto pointer-events-none select-none filter contrast-[1.1] brightness-[1.02] drop-shadow-[0_0_20px_rgba(255,223,128,0.5)] drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] transform-gpu" 
/>
      )}
    </div>
  );
};

export default Logo;