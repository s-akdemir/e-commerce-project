import React from 'react';
import { logos } from '../data/mockData';


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