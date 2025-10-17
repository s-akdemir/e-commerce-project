import React from 'react';
import ProductFilters from '../components/ProductFilters';
import ProductGrid from '../components/ProductGrid';

const ShopPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/*
          Mobilde alt alta (flex-col),
          Geniş ekranlarda yan yana (lg:flex-row) gösterim
        */}
        <div className="flex flex-col lg:flex-row gap-8">
          <ProductFilters />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;