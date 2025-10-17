import React from 'react';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const { items, totalQuantity } = useSelector(state => state.cart);
  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.newPrice, 0);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">Checkout</h1>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sol Taraf: Adres Formu */}
          <div className="w-full lg:w-2/3 bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="p-3 border rounded w-full" />
              <input type="text" placeholder="Last Name" className="p-3 border rounded w-full" />
              <input type="email" placeholder="Email Address" className="p-3 border rounded md:col-span-2" />
              <input type="text" placeholder="Address Line 1" className="p-3 border rounded md:col-span-2" />
              <input type="text" placeholder="City" className="p-3 border rounded" />
              <input type="text" placeholder="Postal Code" className="p-3 border rounded" />
            </form>
          </div>
          
          {/* Sağ Taraf: Sipariş Özeti (CartPage'den alındı) */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded shadow-md sticky top-24">
              <h2 className="text-xl font-bold mb-4 border-b pb-4">Your Order</h2>
              {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm mb-2">
                      <span>{item.name} x {item.quantity}</span>
                      <span>${(item.newPrice * item.quantity).toFixed(2)}</span>
                  </div>
              ))}
              <div className="flex justify-between font-bold text-xl border-t pt-4 mt-4">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
              </div>
              <button className="w-full mt-6 bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600 transition-colors">
                  Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;