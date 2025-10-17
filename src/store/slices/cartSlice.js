import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Sepetteki ürünleri tutacak dizi. Örn: [{ product, quantity }, ...]
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 1. SEPETE EKLEME FONKSİYONU
    addToCart: (state, action) => {
      const newItem = action.payload; // Eklenecek ürün
      const existingItem = state.items.find(item => item.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        // Ürün sepette yoksa, yeni bir eleman olarak ekle
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        // Ürün zaten sepette varsa, sadece miktarını artır
        existingItem.quantity++;
      }
    },

    // 2. SEPETTEN ÜRÜN MİKTARINI AZALTMA FONKSİYONU
    decreaseQuantity: (state, action) => {
      const id = action.payload; // Miktarı azaltılacak ürünün id'si
      const existingItem = state.items.find(item => item.id === id);
      
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        // Eğer ürünün miktarı 1 ise, sepetten tamamen kaldır
        state.items = state.items.filter(item => item.id !== id);
      } else {
        // Miktarı 1'den fazlaysa, sadece bir azalt
        existingItem.quantity--;
      }
    },
    
    // 3. SEPETTEN ÜRÜNÜ TAMAMEN KALDIRMA FONKSİYONU
    removeFromCart: (state, action) => {
        const id = action.payload; // Kaldırılacak ürünün id'si
        const existingItem = state.items.find(item => item.id === id);
        
        if (existingItem) {
            state.totalQuantity = state.totalQuantity - existingItem.quantity;
            state.items = state.items.filter(item => item.id !== id);
        }
    }
  },
});

// Oluşturduğumuz fonksiyonları (action'ları) dışa aktarıyoruz
export const { addToCart, decreaseQuantity, removeFromCart } = cartSlice.actions;

// Reducer'ı dışa aktarıyoruz
export default cartSlice.reducer;