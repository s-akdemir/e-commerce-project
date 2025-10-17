import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter } from '../store/slices/productSlice';

const ProductFilters = () => {
  // dispatch fonksiyonunu Redux action'larını tetiklemek için kullanacağız
  const dispatch = useDispatch();
  
  // useSelector ile store'dan o anki aktif kategori filtresini çekiyoruz.
  // Bu, seçili olan kategoriyi görsel olarak vurgulamamızı sağlar.
  const activeCategory = useSelector((state) => state.products.filters.category);
  
  // Bu kategorilerin mockData'daki ürünlerinizle eşleşmesi gerekir.
  // "all" özel bir durumdur, tüm ürünleri göstermek için kullanılır.
  const categories = ["all", "Clothes", "Shoes", "Bags", "Accessories"]; 

  // Bir kategoriye tıklandığında çalışacak olan fonksiyon
  const handleCategoryClick = (category) => {
    // dispatch ile Redux'a setCategoryFilter action'ını gönderiyoruz.
    // payload olarak tıklanan kategorinin adını veriyoruz.
    dispatch(setCategoryFilter(category));
  };

  return (
    <aside className="w-full lg:w-1/4 xl:w-1/5 p-4 bg-white lg:bg-transparent rounded shadow-md lg:shadow-none">
      <h3 className="text-xl font-bold mb-6 text-slate-800">Categories</h3>
      <ul className="space-y-4 text-gray-600 font-bold">
        {categories.map(category => (
          <li 
            key={category} 
            // Kategoriye tıklandığında handleCategoryClick fonksiyonunu çağır
            onClick={() => handleCategoryClick(category)}
            // Koşullu class'lar: Aktif kategoriye farklı stil uygula
            className={`cursor-pointer capitalize hover:text-blue-500 transition-colors ${
              activeCategory === category ? 'font-extrabold text-blue-500' : ''
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
      
      {/* Diğer filtreler (fiyat, renk vb.) gelecekte buraya eklenebilir */}
    </aside>
  );
};

export default ProductFilters;