// localStorage'dan state'i yüklemeyi dener
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return undefined; // Kayıtlı state yoksa, undefined döndür ki Redux kendi initialState'ini kullansın
    }
    return JSON.parse(serializedState); // String'i tekrar objeye çevir
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return undefined; // Hata durumunda da undefined döndür
  }
};

// State'i localStorage'a kaydeder
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state); // Objeyi string'e çevir
    localStorage.setItem('cart', serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};