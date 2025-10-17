import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

// YENİ: localStorage yardımcı fonksiyonlarımızı import ediyoruz
import { loadState, saveState } from '../utils/localStorage';
import authReducer from './slices/authSlice';


// YENİ: Uygulama ilk yüklendiğinde localStorage'dan sepet verisini çekiyoruz
const preloadedState = {
    cart: loadState() 
};

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
  },
  // YENİ: Çektiğimiz veriyi store'un başlangıç durumu olarak ayarlıyoruz
  preloadedState,
});

// YENİ: Store'daki her değişiklikte (dispatch edilen her action'dan sonra)
// sepetin güncel durumunu localStorage'a kaydediyoruz.
store.subscribe(() => {
  saveState(store.getState().cart);
});