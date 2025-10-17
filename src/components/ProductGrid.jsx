import React from 'react';
import { useMemo } from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const ProductGrid = () => {
  // useSelector ile Redux store'dan hem ürünlerin tamamını hem de filtre objesini çekiyoruz.
  const { products, filters } = useSelector((state) => state.products);

  // useMemo kullanarak filtreleme işlemini optimize ediyoruz.
  // Bu işlem sadece 'products' veya 'filters' değiştiğinde yeniden çalışır,
  // gereksiz render'ların önüne geçer.
  const filteredProducts = useMemo(() => {
    // Eğer kategori filtresi 'all' ise, hiçbir filtreleme yapma, tüm ürünleri döndür.
    if (filters.category === 'all') {
      return products;
    }
    
    // Değilse, ürünler dizisini filtrele ve sadece kategorisi
    // aktif filtre kategorisiyle eşleşen ürünleri döndür.
    return products.filter(product => product.category === filters.category);
  }, [products, filters]); // Bağımlılık dizisi: Bu değerler değişince yeniden hesapla.

  return (
    <main className="w-full lg:w-3/4 xl:w-4/5 p-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Showing {filteredProducts.length} Products</h3>
        <div>
          {/* Sıralama vb. seçenekler buraya gelebilir */}
        </div>
      </div>
      
      {/* Ürün Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Her zaman orijinal 'products' dizisi yerine filtrelenmiş olan 'filteredProducts' dizisini map'liyoruz. */}
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Eğer filtrelenmiş ürün yoksa bir mesaj göster (opsiyonel) */}
      {filteredProducts.length === 0 && (
          <div className="col-span-full text-center py-12 bg-white rounded shadow">
              <p className="text-lg text-gray-600">No products found for this category.</p>
          </div>
      )}
      
      {/* Sayfalama (Pagination) */}
      <div className="flex justify-center mt-12">
         <div className="flex gap-2">
            <button className="px-4 py-2 border rounded">First</button>
            <button className="px-4 py-2 border rounded bg-sky-500 text-white">1</button>
            <button className="px-4 py-2 border rounded">2</button>
            <button className="px-4 py-2 border rounded">3</button>
            <button className="px-4 py-2 border rounded">Next</button>
         </div>
      </div>
    </main>
  );
};

export default ProductGrid;