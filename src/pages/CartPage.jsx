import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const CartPage = () => {
    // Redux store'dan sepet verilerini çekiyoruz
    const { items, totalQuantity } = useSelector(state => state.cart);

    // Sepet toplam tutarını hesaplıyoruz
    const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.newPrice, 0);

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">Shopping Cart</h1>

                {totalQuantity === 0 ? (
                    // Sepet boşsa gösterilecek mesaj
                    <div className="text-center bg-white p-12 rounded shadow-md">
                        <p className="text-xl text-gray-600 mb-4">Your cart is empty.</p>
                        <Link to="/shop" className="bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-600 transition-colors">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    // Sepette ürün varsa
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sol Taraf: Sepet Listesi */}
                        <div className="w-full lg:w-2/3 bg-white rounded shadow-md">
                            {items.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>

                        {/* Sağ Taraf: Sipariş Özeti */}
                        <div className="w-full lg:w-1/3">
                            <div className="bg-white p-6 rounded shadow-md">
                                <h2 className="text-xl font-bold mb-4 border-b pb-4">Order Summary</h2>
                                <div className="flex justify-between mb-2 text-gray-700">
                                    <span>Subtotal ({totalQuantity} items)</span>
                                    <span>${totalAmount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between mb-4 text-gray-700">
                                    <span>Shipping</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between font-bold text-xl border-t pt-4">
                                    <span>Total</span>
                                    <span>${totalAmount.toFixed(2)}</span>
                                </div>
                                <Link to="/checkout" className="block text-center w-full mt-6 bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600 transition-colors">
                                    Proceed to Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;