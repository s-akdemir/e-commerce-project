import React from 'react';
import { DUMMY_PRODUCT_IMAGES } from '../data/mockData';



const ProductImageGallery = () => {
  const [mainImage, setMainImage] = React.useState(DUMMY_PRODUCT_IMAGES[0]);

  return (
    <div className="flex flex-col items-center">
      {/* Ana Ürün Resmi */}
      <img 
        src={mainImage} 
        alt="Main Product" 
        className="w-full max-w-lg h-auto object-cover rounded shadow-md mb-4"
      />

      {/* Küçük Resim Thumbnail'ları */}
      <div className="flex gap-2 overflow-x-auto justify-center">
        {DUMMY_PRODUCT_IMAGES.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Product Thumbnail ${index + 1}`} 
            className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
              img === mainImage ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;