import React from 'react';
import { Outlet } from 'react-router-dom'; // Sayfa içeriğini render etmek için
import Header from './Header';
import Footer from './Footer';

const PageContent = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Outlet /> {/* Router'daki sayfa bileşenleri burada görünecek */}
      </main>
      <Footer />
    </div>
  );
};

export default PageContent;