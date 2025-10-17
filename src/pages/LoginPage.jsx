import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Formun sayfayı yenilemesini engelle

    // --- GERÇEK UYGULAMADA BURADA API İSTEĞİ OLUR ---
    // Şimdilik, giriş işlemini simüle ediyoruz ve sahte bir kullanıcı verisi gönderiyoruz.
    const mockUser = { name: 'Selman Akdemir', email: 'selman@test.com' };
    dispatch(login(mockUser));

    // Kullanıcıyı ana sayfaya yönlendir
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-slate-800">Login to your account</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <input type="email" placeholder="Email Address" required className="w-full p-3 border rounded-md" />
          <input type="password" placeholder="Password" required className="w-full p-3 border rounded-md" />
          <button type="submit" className="w-full py-3 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account? <Link to="/register" className="font-bold text-blue-500 hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;