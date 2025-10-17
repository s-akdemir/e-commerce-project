

// Sahte ürün verisi (normalde bir API'den veya Redux store'dan gelir)
export const DUMMY_PRODUCT_DATA = {
  id: '123',
  name: 'Graphic Design Product Name',
  category: 'English Department',
  rating: 4,
  reviews: 15,
  description: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
  price: '16.48',
  oldPrice: '20.00', // Opsiyonel
  colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
  // imageUrls: [] // ProductImageGallery'de geçici resimler kullanıyoruz
};

export const DUMMY_PRODUCTS = [
  { id: 1, imageUrl: 'https://i.imgur.com/e0LwO9a.png', name: 'Graphic Design', category: 'Shoes', oldPrice: '16.48', newPrice: '6.48' },
  { id: 2, imageUrl: 'https://i.imgur.com/m29IY1i.png', name: 'Graphic Design', category: 'Shoes', oldPrice: '16.48', newPrice: '6.48' },
  { id: 3, imageUrl: 'https://i.imgur.com/2v3g6C8.png', name: 'Graphic Design', category: 'Bags', oldPrice: '16.48', newPrice: '6.48' },
  { id: 4, imageUrl: 'https://i.imgur.com/pYxY2EE.png', name: 'Graphic Design', category: 'Bags', oldPrice: '16.48', newPrice: '6.48' },
  { id: 5, imageUrl: 'https://i.imgur.com/e0LwO9a.png', name: 'Graphic Design', category: 'Accessories', oldPrice: '16.48', newPrice: '6.48' },
  { id: 6, imageUrl: 'https://i.imgur.com/m29IY1i.png', name: 'Graphic Design', category: 'Accessories', oldPrice: '16.48', newPrice: '6.48' },
  { id: 7, imageUrl: 'https://i.imgur.com/2v3g6C8.png', name: 'Graphic Design', category: 'Clothes', oldPrice: '16.48', newPrice: '6.48' },
  { id: 8, imageUrl: 'https://i.imgur.com/pYxY2EE.png', name: 'Graphic Design', category: 'Clothes', oldPrice: '16.48', newPrice: '6.48' },
  { id: 9, imageUrl: 'https://i.imgur.com/2v3g6C8.png', name: 'Graphic Design', category: 'Clothes', oldPrice: '16.48', newPrice: '6.48' },
  { id: 10, imageUrl: 'https://i.imgur.com/pYxY2EE.png', name: 'Graphic Design', category: 'Clothes', oldPrice: '16.48', newPrice: '6.48' },
];

// YENİ: Promosyon verilerini buraya ekliyoruz
export const promotions = [
  {
    tagline: 'Your Space',
    title: 'Unique Life',
    imageUrl: 'https://i.imgur.com/KzD82eA.png', // Dondurma resmi
    textColor: 'text-white'
  },
  {
    tagline: 'Ends Today',
    title: 'Elements Style',
    imageUrl: 'https://i.imgur.com/L79gclR.png', // Elma resmi
    textColor: 'text-slate-800'
  },
  {
    tagline: 'Ends Today',
    title: 'Elements Style',
    imageUrl: 'https://i.imgur.com/1vYAS56.png', // Et resmi
    textColor: 'text-slate-800'
  }
];