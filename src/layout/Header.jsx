import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, Heart, ChevronDown, X, LogOut } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { totalQuantity } = useSelector((state) => state.cart);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    if (isMenuOpen) setIsMenuOpen(false); // Mobil menü açıksa kapat
    navigate('/');
  };

  return (
    <header className="bg-white w-full sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-slate-800">
          Bandage
        </Link>

        {/* Orta: Desktop Navigasyon Menüsü (Dolu Hali) */}
        <nav className="hidden md:flex items-center gap-6 text-gray-600 font-bold">
          <Link to="/" className="hover:text-slate-800">Home</Link>
          <div className="relative">
            <button 
              onClick={() => setIsShopMenuOpen(!isShopMenuOpen)}
              className="flex items-center gap-1 hover:text-slate-800"
            >
              Shop <ChevronDown size={16} />
            </button>
            {isShopMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4 z-10">
                <ul className="space-y-3">
                  <li><Link to="/shop" onClick={() => setIsShopMenuOpen(false)} className="hover:text-blue-500">Tüm Ürünler</Link></li>
                  {/* Diğer shop linkleri buraya eklenebilir */}
                </ul>
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-slate-800">About</Link>
          <Link to="/blog" className="hover:text-slate-800">Blog</Link>
          <Link to="/contact" className="hover:text-slate-800">Contact</Link>
        </nav>

        {/* Sağ Taraf: Kullanıcı Aksiyonları */}
        <div className="flex items-center gap-5">
          {isAuthenticated ? (
            <div className="hidden md:flex items-center gap-4">
              <span className="font-bold text-slate-800">Welcome, {user.name.split(' ')[0]}</span>
              <button onClick={handleLogout} className="flex items-center gap-1 text-sky-500 font-bold">
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="hidden md:flex items-center gap-1 font-bold text-sky-500">
              <User size={20} />
              <span>Login / Register</span>
            </Link>
          )}

          <button className="text-slate-800 hover:text-sky-500"><Search size={22} strokeWidth={1.5} /></button>
          <Link to="/cart" className="relative text-slate-800 hover:text-sky-500">
            <ShoppingCart size={22} strokeWidth={1.5} />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">{totalQuantity}</span>
            )}
          </Link>
          <button className="hidden md:block text-slate-800 hover:text-sky-500"><Heart size={22} strokeWidth={1.5} /></button>
          <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobil Menü Ekranı (Dinamik Hale Getirildi) */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)}><X size={28} /></button>
          </div>
          <nav className="flex flex-col items-center gap-8 text-2xl text-gray-600">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
          
          {/* YENİ: Mobil menüde de giriş durumuna göre farklı içerik göster */}
          <div className="mt-auto pt-8 border-t text-center">
            {isAuthenticated ? (
                <button onClick={handleLogout} className="text-red-500 font-bold text-xl">
                  Logout
                </button>
            ) : (
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-sky-500 font-bold text-xl">
                  Login / Register
                </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;