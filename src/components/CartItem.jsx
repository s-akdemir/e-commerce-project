import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseQuantity, removeFromCart } from '../store/slices/cartSlice';
import { Plus, Minus, Trash2 } from 'lucide-react';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addToCart(item)); // addToCart, var olan ürünün miktarını artırır
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };
  
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-wrap gap-4">
      {/* Ürün Bilgisi */}
      <div className="flex items-center gap-4 flex-1 min-w-[200px]">
        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
        <div>
          <h3 className="font-bold text-slate-800">{item.name}</h3>
          <p className="text-sm text-gray-500">${item.newPrice}</p>
        </div>
      </div>

      {/* Miktar Kontrolcüsü */}
      <div className="flex items-center gap-2">
        <button onClick={handleDecrease} className="p-2 border rounded hover:bg-gray-100">
          <Minus size={16} />
        </button>
        <span className="px-4 font-bold">{item.quantity}</span>
        <button onClick={handleIncrease} className="p-2 border rounded hover:bg-gray-100">
          <Plus size={16} />
        </button>
      </div>
      
      {/* Toplam Fiyat ve Silme Butonu */}
      <div className="flex items-center gap-6">
        <p className="font-bold text-slate-800 min-w-[80px] text-right">
          ${(item.quantity * item.newPrice).toFixed(2)}
        </p>
        <button onClick={handleRemove} className="text-red-500 hover:text-red-700">
            <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;