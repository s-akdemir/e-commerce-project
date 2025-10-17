import React from 'react';

// Swiper React bileşenlerini import et
import { Swiper, SwiperSlide } from 'swiper/react';

// Gerekli Swiper modüllerini import et
import { Navigation, Pagination } from 'swiper/modules';

// Swiper stillerini import et
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSection = () => {
  return (
    // Swiper bileşenini ana kapsayıcı olarak kullanıyoruz
    <Swiper
      // Gerekli modülleri Swiper'a tanıtıyoruz
      modules={[Navigation, Pagination]}
      slidesPerView={1} // Aynı anda sadece 1 slayt göster
      spaceBetween={0} // Slaytlar arasında boşluk olmasın
      loop={true} // Sona gelince başa dön (sonsuz döngü)
      navigation={true} // İleri-geri oklarını göster
      pagination={{ clickable: true }} // Tıklanabilir sayfalama noktalarını (dots) göster
      className="w-full h-[85vh] max-h-[700px]" // Slider'ın boyutunu belirliyoruz
    >
      {/* Her bir SwiperSlide bir slaytı temsil eder */}
      
      {/* SLAYT 1 */}
      <SwiperSlide>
        <div 
          className="relative w-full h-full bg-cover bg-center flex items-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 w-full px-8 text-white container mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              GROCERIES <br /> DELIVERY
            </h2>
            <p className="mt-4 max-w-sm text-lg">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="mt-8 bg-sky-500 text-white font-bold py-3 px-10 rounded hover:bg-sky-600 transition-colors">
              Start Now
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* SLAYT 2 */}
      <SwiperSlide>
        <div 
          className="relative w-full h-full bg-cover bg-center flex items-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621996346565-e326e7e248e2?q=80&w=1764')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 w-full px-8 text-white container mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              FRESH & FAST <br /> EVERYDAY
            </h2>
            <p className="mt-4 max-w-sm text-lg">
              The best products from local farms, delivered right to your door.
            </p>
            <button className="mt-8 bg-sky-500 text-white font-bold py-3 px-10 rounded hover:bg-sky-600 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default HeroSection;