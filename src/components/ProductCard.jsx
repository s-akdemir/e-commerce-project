import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    // Tüm kartı Link bileşeni ile sarmalıyoruz
    <Link to={`/product/${product.id}`} className="block">
      <div className="flex flex-col items-center text-center p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
        <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover mb-6" />
        
        <div className="flex flex-col flex-grow justify-between">
            <div>
                <h3 className="font-bold text-slate-800 text-lg">
                    {product.name}
                </h3>
                <p className="text-sm font-bold text-gray-400 my-2">
                    {product.category}
                </p>
            </div>
            <div className="flex gap-2 font-bold justify-center mt-2">
                <span className="text-gray-400 line-through">
                    ${product.oldPrice}
                </span>
                <span className="text-teal-600">
                    ${product.newPrice}
                </span>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;