import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false, // Kullanıcı giriş yapmış mı?
  user: null,             // Giriş yapmış kullanıcı bilgileri. Örn: { name: 'John Doe', email: '...' }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Giriş yapma action'ı
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // payload olarak kullanıcı objesini alacağız
    },
    // Çıkış yapma action'ı
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;