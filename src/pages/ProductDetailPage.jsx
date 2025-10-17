import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductImageGallery from '../components/ProductImageGallery';
import { Star, Eye, Heart, Share2 } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useDispatch } from 'react-redux'; // YENİ: useDispatch hook'unu import et
import { addToCart } from '../store/slices/cartSlice'; // YENİ: addToCart action'ını import et
import { useSelector } from 'react-redux';

// 2. ADIM: Bu dosyadaki tüm eski DUMMY_... veri importları ve tanımlamaları silinmiş olmalı.

const ProductDetailPage = () => {
 
  const dispatch = useDispatch(); // YENİ: dispatch fonksiyonunu tanımla
   // URL'den ürün ID'sini alın.
  const { id } = useParams();
   // useSelector ile Redux store'dan TÜM ürünlerin listesini çekin.
  const { products } = useSelector((state) => state.products);
  
  // URL'den gelen 'id'yi kullanarak, Redux'tan çektiğiniz 'products' dizisi içinde doğru ürünü bulun.
  // Not: `==` kullanıyoruz çünkü URL'den gelen `id` string, objemizdeki `id` number olabilir.
  const product = products.find(p => p.id == id);

  // YENİ: Sepete ekleme işlemini yönetecek fonksiyon
  const handleAddToCart = () => {
    // dispatch ile addToCart action'ını ve payload olarak ürünü gönderiyoruz
    dispatch(addToCart(product));
  };

  // Eğer o ID'ye sahip bir ürün bulunamazsa, bir "Bulunamadı" mesajı gösterin.
  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-slate-700">Product Not Found!</h2>
        <Link to="/shop" className="text-blue-500 hover:underline mt-4 inline-block">
          &larr; Go back to Shop
        </Link>
      </div>
    );
  }

  // 7. ADIM: JSX içinde artık güvenle 'product' objesini kullanabilirsiniz.
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-8 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-blue-500">Shop</Link>
            <span>/</span>
            <span className="font-bold text-slate-700">{product.name}</span>
        </div>

        {/* Ürün Detayları Ana Bölümü */}
        <div className="flex flex-col lg:flex-row gap-12 bg-white p-8 rounded shadow-md">
          <div className="w-full lg:w-1/2">
            <ProductImageGallery />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill={i < (product.rating || 4) ? '#F3CD03' : '#E0E0E0'} strokeWidth={0} />
              ))}
              <span className="text-gray-500 text-sm font-bold">{(product.reviews || 15)} Reviews</span>
            </div>

            <p className="text-3xl font-bold text-slate-800 mb-4">${product.newPrice}</p>
            {product.oldPrice && (
              <p className="text-sm text-gray-500 line-through mb-4">${product.oldPrice}</p>
            )}

            <div className="text-gray-500 text-sm font-bold mb-6">
                <p>Availability: <span className="text-blue-500">In Stock</span></p>
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>

            <div className="border-t border-gray-200 pt-8">
                <div className="flex items-center gap-4">
                    {/* YENİ: Butona onClick olayı ekledik */}
                <button 
                    onClick={handleAddToCart}
                    className="bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Add to Cart
                </button>
                    <button className="p-3 border rounded-full text-gray-500 hover:text-blue-500 hover:border-blue-500 transition-colors"><Heart size={20} /></button>
                    <button className="p-3 border rounded-full text-gray-500 hover:text-blue-500 hover:border-blue-500 transition-colors"><Eye size={20} /></button>
                    <button className="p-3 border rounded-full text-gray-500 hover:text-blue-500 hover:border-blue-500 transition-colors"><Share2 size={20} /></button>
                </div>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS - İlişkili Ürünler */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">BESTSELLER PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* İlişkili ürünler de Redux'tan gelen 'products' listesinden alınır */}
            {products.slice(0, 4).map(p => (
              <Link to={`/product/${p.id}`} key={p.id} className="block">
                <ProductCard product={p} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;