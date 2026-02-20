import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { galleryImages } from "@/data/siteData";
import KarolinaImg from '@/assets/Karolina.jpg';
//import ZawodyImg from '@/assets/Zawody.jpg';
//import CeremoniaPasowImg from '@/assets/CeremoniaPasow.jpg';
// ... pozostałe importy obrazów

const galleryAssetsMap = {
  'assets/Karolina.jpg': KarolinaImg,
  //'assets/Zawody.jpg': ZawodyImg,
  //'assets/CeremoniaPasow.jpg': CeremoniaPasowImg,
  // ... reszta mapy
} as Record<string, string>;

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);  // <-- DODANE

  return (
    <main>
      {/* ... sekcja hero bez zmian ... */}

      <section className="container py-16">
        <h2 className="text-4xl mb-8">GALERIA ZDJĘĆ</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <Card 
              key={i} 
              className="overflow-hidden group cursor-pointer"  // <-- DODANE cursor-pointer
              onClick={() => setSelectedImg(galleryAssetsMap[img.src] || img.src)}  // <-- DODANE
            >
              <CardContent className="p-0 relative aspect-square">
                <img 
                  src={galleryAssetsMap[img.src] || '/placeholder.svg'} 
                  alt={img.alt} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-primary-foreground text-sm font-medium">{img.caption}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* <-- DODANE: Modal powiększenia */}
      {selectedImg && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}  // Kliknij poza = zamknij
        >
          <img 
            src={selectedImg} 
            alt="Powiększona" 
            className="max-w-full max-h-full object-contain" 
          />
          <button 
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            onClick={() => setSelectedImg(null)}
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
};

export default Gallery;
