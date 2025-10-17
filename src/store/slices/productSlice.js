import { createSlice } from '@reduxjs/toolkit';
// DUMMY_PRODUCTS'ı mockData'dan alacağımız için bu satırı mockData'ya göre düzenleyin
import { DUMMY_PRODUCTS } from '../../data/mockData';

const initialState = {
  products: DUMMY_PRODUCTS,
  // YENİ: Filtrelerin durumunu tutacak state
  filters: {
    category: 'all', // Başlangıçta tüm kategoriler seçili
    // Gelecekte eklenebilir: searchTerm: '', priceRange: [0, 1000]
  },
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // YENİ: Kategori filtresini güncelleyecek reducer
    setCategoryFilter: (state, action) => {
      // action.payload, tıklanan kategorinin adı olacak (örn: "Clothes")
      state.filters.category = action.payload;
    },
  },
});

// YENİ: Yeni action'ı dışa aktarıyoruz
export const { setCategoryFilter } = productSlice.actions;

export default productSlice.reducer;