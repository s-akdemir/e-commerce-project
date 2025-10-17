import React from 'react';

const CategoryBanners = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        {/* Banner'ları tutan ana flex container */}
        {/* Mobilde alt alta (flex-col), büyük ekranlarda yan yana (lg:flex-row) olacak */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sol Banner (Sarı) */}
          <div 
            className="relative flex-1 h-[500px] bg-cover bg-center flex items-end p-8"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1887')" }} // Gerçek resim URL'sini buraya ekleyin
          >
            <div className="text-slate-800">
              <p className="font-bold text-green-600">FURNITURE</p>
              <p className="text-sm">5 Items</p>
            </div>
          </div>

          {/* Sağ Banner (Donut) */}
          <div 
            className="relative flex-1 h-[500px] bg-cover bg-center flex items-end p-8"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964')" }} // Gerçek resim URL'sini buraya ekleyin
          >
             <div className="text-slate-800">
              <p className="font-bold text-green-600">FURNITURE</p>
              <p className="text-sm">5 Items</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CategoryBanners;