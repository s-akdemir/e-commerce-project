import React from 'react';
import { Link } from 'react-router-dom';
import { promotions } from '../data/mockData';

const PromoCards = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/*
          Mobilde tek sütun (grid-cols-1),
          Orta ekranlarda (md) ve üzerinde üç sütun (md:grid-cols-3)
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div 
              key={index}
              className="relative h-80 bg-cover bg-center rounded shadow-lg flex flex-col justify-center p-8"
              style={{ backgroundImage: `url(${promo.imageUrl})` }}
            >
              {/* Metin içeriği */}
              <div className={promo.textColor}>
                <p className="font-bold text-sm">{promo.tagline}</p>
                <h3 className="text-3xl font-bold my-2">{promo.title}</h3>
                <Link to="/shop" className="font-bold underline">
                  Explore Items
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoCards;