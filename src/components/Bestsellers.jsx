import React from 'react';
import ProductCard from './ProductCard';

// 1. ADIM: useSelector hook'unu react-redux'tan import edin.
import { useSelector } from 'react-redux';

// 2. ADIM: Bu dosyanın içindeki eski DUMMY_PRODUCTS dizisi tamamen silinmiş olmalı.

const Bestsellers = () => {
  // 3. ADIM: useSelector kullanarak ürünleri doğrudan Redux store'dan çekin.
  // Bu satır, store'daki 'products' diliminin içindeki 'products' dizisine erişir.
  const { products } = useSelector((state) => state.products);

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-800">BESTSELLER PRODUCTS</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 font-bold text-gray-500">
          <a href="#" className="text-blue-500">Men</a>
          <a href="#">Women</a>
          <a href="#">Accessories</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 4. ADIM: 'products' dizisinin .map() ile render edildiğinden emin olun.
            Ana sayfada sadece ilk 8 ürünü göstermek için .slice(0, 8) kullanıyoruz.
            'products &&' kontrolü, veri henüz gelmediyse hata almayı önler (iyi bir alışkanlık).
          */}
          {products && products.slice(0, 8).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-blue-500 font-bold border border-blue-500 rounded py-3 px-10 hover:bg-blue-500 hover:text-white transition-colors">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;