import React from 'react';

// Normalde bu logolar bir API'den veya bir obje dizisinden gelir.
// Şimdilik doğrudan ekleyeceğiz. SVG'leri import etmek en iyi yöntemdir.
// Geçici olarak imgur linkleri kullanıyorum.
const logos = [
  'https://i.imgur.com/vJ4aQIl.png', // hooli
  'https://i.imgur.com/2Y07Q5c.png', // lyft
  'https://i.imgur.com/DBIpor1.png', // leaf
  'https://i.imgur.com/p14wL8p.png', // stripe
  'https://i.imgur.com/K3aW2y0.png', // aws
  'https://i.imgur.com/Y3J3k36.png', // reddit
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/*
          - flex: Flexbox'ı etkinleştirir.
          - flex-wrap: Ekran daraldığında logoların alt satıra kaymasını sağlar.
          - justify-around: Logolar arasında ve kenarlarda boşluk bırakır.
          - items-center: Logoları dikeyde ortalar.
          - gap-8: Logolar arasına boşluk koyar.
        */}
        <div className="flex flex-wrap justify-around items-center gap-8">
          {logos.map((logoUrl, index) => (
            <img 
              key={index} 
              src={logoUrl} 
              alt={`Client Logo ${index + 1}`} 
              className="h-10 w-auto text-gray-400" // Yüksekliği sabitliyoruz, genişlik otomatik ayarlanıyor.
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;