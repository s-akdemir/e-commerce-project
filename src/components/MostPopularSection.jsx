import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const MostPopularSection = () => {
    // Bu bölümde tek bir ürün gösterildiği için, Redux'taki ürünlerden ilkini alalım
    const { products } = useSelector((state) => state.products);
    const featuredProduct = products[0]; // İlk ürünü öne çıkarılan olarak seçelim

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                {/* Üst Kısım: İki Sütunlu Yapı */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                    {/* Sol Sütun: Resim */}
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1594029283129-2e9a58d4a32e?q=80&w=1887" 
                            alt="Delivery person on a scooter"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    {/* Sağ Sütun: İçerik */}
                    <div>
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">MOST POPULAR</h2>
                        <p className="text-gray-600 mb-6">
                            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                        </p>
                        {/* Öne çıkan ürün kartını burada render ediyoruz */}
                        {featuredProduct && <ProductCard product={featuredProduct} />}
                    </div>
                </div>

                {/* Alt Kısım: Numaralı Liste */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
                    <div className="flex items-start gap-4">
                        <span className="text-5xl font-bold text-red-500">1.</span>
                        <div>
                            <h4 className="font-bold text-slate-800">Easy to use</h4>
                            <p className="text-sm text-gray-600">Things on a very small scale just do not act that way.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-5xl font-bold text-red-500">2.</span>
                        <div>
                            <h4 className="font-bold text-slate-800">Easy to use</h4>
                            <p className="text-sm text-gray-600">Things on a very small scale just do not act that way.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-5xl font-bold text-red-500">3.</span>
                        <div>
                            <h4 className="font-bold text-slate-800">Easy to use</h4>
                            <p className="text-sm text-gray-600">Things on a very small scale just do not act that way.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-5xl font-bold text-red-500">4.</span>
                        <div>
                            <h4 className="font-bold text-slate-800">Easy to use</h4>
                            <p className="text-sm text-gray-600">Things on a very small scale just do not act that way.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MostPopularSection;