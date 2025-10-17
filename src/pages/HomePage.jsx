import React from 'react';

// Tüm ana sayfa bileşenlerini import ediyoruz
import HeroSection from '../components/HeroSection';
import ClientLogos from '../components/ClientLogos';
import CategoryBanners from '../components/CategoryBanners';
import Bestsellers from '../components/Bestsellers';
import PromoCards from '../components/PromoCards'; // YENİ: PromoCards'ı import et
import MostPopularSection from '../components/MostPopularSection'; // YENİ: MostPopularSection'ı import et
import FeaturedPosts from '../components/FeaturedPosts';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ClientLogos />
      <CategoryBanners />
      <Bestsellers />
      <PromoCards /> {/* Yeni bileşeni buraya ekledik */}
      <MostPopularSection /> {/* Yeni bileşeni buraya ekledik */}
      <FeaturedPosts />
    </div>
  );
};

export default HomePage;