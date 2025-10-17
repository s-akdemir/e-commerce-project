// --- ÜRÜNLER ---

// Ürün detay sayfasında ve diğer yerlerde kullanılacak tam ürün listesi.
// Kategoriler, ProductFilters.jsx'teki kategori listesiyle eşleşmektedir.
export const DUMMY_PRODUCTS = [
  { 
    id: 1, 
    imageUrl: 'https://images.unsplash.com/photo-1542291026-79eddc756ec3?q=80&w=870', 
    name: 'Performans Koşu Ayakkabısı', 
    category: 'Shoes', 
    oldPrice: '2999.90', 
    newPrice: '2499.90',
    rating: 5,
    reviews: 42,
  },
  { 
    id: 2, 
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd635d2c?q=80&w=687', 
    name: 'Klasik Beyaz Sneaker', 
    category: 'Shoes', 
    oldPrice: '2299.90', 
    newPrice: '1899.90',
    rating: 4,
    reviews: 28,
  },
  { 
    id: 3, 
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ded66d?q=80&w=870', 
    name: 'Deri Siyah Bot', 
    category: 'Shoes', 
    oldPrice: '3599.90', 
    newPrice: '2999.90',
    rating: 4,
    reviews: 31,
  },
  { 
    id: 4, 
    imageUrl: 'https://images.unsplash.com/photo-1591561934208-28c4141638e3?q=80&w=736', 
    name: 'Deri Omuz Çantası', 
    category: 'Bags', 
    oldPrice: '1699.90', 
    newPrice: '1299.90',
    rating: 5,
    reviews: 19,
  },
  { 
    id: 5, 
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb6e0e5c8?q=80&w=687', 
    name: 'Fonksiyonel Sırt Çantası', 
    category: 'Bags', 
    oldPrice: '1199.90', 
    newPrice: '999.90',
    rating: 4,
    reviews: 35,
  },
  { 
    id: 6, 
    imageUrl: 'https://images.unsplash.com/photo-1616735394239-14a48971ea29?q=80&w=764', 
    name: 'Minimalist Altın Kolye', 
    category: 'Accessories', 
    oldPrice: '2599.90', 
    newPrice: '2199.90',
    rating: 5,
    reviews: 12,
  },
  { 
    id: 7, 
    imageUrl: 'https://images.unsplash.com/photo-1620625515032-6ed0a1f3b37a?q=80&w=735', 
    name: 'Klasik Gümüş Saat', 
    category: 'Accessories', 
    oldPrice: '4299.90', 
    newPrice: '3499.90',
    rating: 5,
    reviews: 25,
  },
  { 
    id: 8, 
    imageUrl: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e5?q=80&w=699', 
    name: 'Zamansız Kot Ceket', 
    category: 'Clothes', 
    oldPrice: '1999.90', 
    newPrice: '1599.90',
    rating: 4,
    reviews: 58,
  },
  { 
    id: 9, 
    imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=870', 
    name: 'Keten Gömlek', 
    category: 'Clothes', 
    oldPrice: '1099.90', 
    newPrice: '899.90',
    rating: 5,
    reviews: 41,
  },
  { 
    id: 10, 
    imageUrl: 'https://images.unsplash.com/photo-1549902529-a515e2142f0e?q=80&w=711', 
    name: 'Yünlü Kışlık Kazak', 
    category: 'Clothes', 
    oldPrice: '1799.90', 
    newPrice: '1399.90',
    rating: 5,
    reviews: 22,
  },
];

// Tek bir ürün detayını göstermek için kullanılan örnek veri.
// DUMMY_PRODUCTS içindeki ilk ürünle senkronize edilmiştir.
export const DUMMY_PRODUCT_DATA = {
  id: '2',
  name: 'Klasik Beyaz Sneaker',
  category: 'Shoes',
  rating: 4,
  reviews: 28,
  description: 'Zamana meydan okuyan tasarımı ve üstün konforu bir araya getiren bu klasik beyaz sneaker, her gardırobun vazgeçilmezidir. Yüksek kaliteli deri malzemesi ve dayanıklı kauçuk tabanı ile gün boyu rahatlık sunar. Hem spor hem de şık kombinlerinizle mükemmel uyum sağlar.',
  price: '1899.90',
  oldPrice: '2299.90',
  colors: ['#FFFFFF', '#000000', '#2DC071', '#23A6F0'],
};


// --- DİĞER SAYFA VERİLERİ ---

// Ana sayfadaki 3'lü promosyon kartları için veri
export const promotions = [
  {
    tagline: 'Yeni Sezon',
    title: 'Görünümünü Yenile',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=870',
    textColor: 'text-white'
  },
  {
    tagline: 'Son Fırsatlar',
    title: 'Stil Sahibi Parçalar',
    imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a50df02?q=80&w=687',
    textColor: 'text-slate-800'
  },
  {
    tagline: 'Ev & Yaşam',
    title: 'Konfor Alanı Yarat',
    imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=687',
    textColor: 'text-white'
  }
];

// Blog sayfasındaki gönderiler için veri
export const DUMMY_POSTS = [
  {
    id: 1,
    title: '2025 Sonbahar/Kış Ayakkabı Trendleri',
    description: 'Yeni sezonda adımlarınıza yön verecek en popüler ayakkabı modellerini ve renk paletlerini keşfedin. Klasik botlardan cesur sneakerlara kadar her tarza uygun bir seçenek var.',
    imageUrl: 'https://images.unsplash.com/photo-1608256246200-53e6357d76f5?q=80&w=774',
    date: '12 Ekim 2025',
    comments: 15
  },
  {
    id: 2,
    title: 'Kapsül Gardırop Nasıl Oluşturulur?',
    description: 'Daha az parça ile daha fazla kombin yaratmanın sırlarını öğrenin. Zamansız ve birbiriyle uyumlu kıyafetlerle kendi kapsül gardırobunuzu oluşturmak için pratik ipuçları.',
    imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=871',
    date: '05 Ekim 2025',
    comments: 22
  },
  {
    id: 3,
    title: 'Aksesuar Seçiminin Püf Noktaları',
    description: 'Doğru aksesuarlarla en sade görünümleri bile nasıl bir üst seviyeye taşıyabileceğinizi gösteriyoruz. Saat, kolye ve çanta seçiminde dikkat edilmesi gerekenler.',
    imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715',
    date: '28 Eylül 2025',
    comments: 8
  },
];

// Ürün detay sayfasındaki resim galerisi için veri
export const DUMMY_PRODUCT_IMAGES = [
  'https://images.unsplash.com/photo-1595950653106-6c9ebd635d2c?q=80&w=687', // Ana resim
  'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725',
  'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=880',
  'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=715',
];


// Sponsor/Marka logoları (mevcut halleriyle bırakıldı)
export const logos = [
  'https://i.imgur.com/vJ4aQIl.png', // hooli
  'https://i.imgur.com/2Y07Q5c.png', // lyft
  'https://i.imgur.com/DBIpor1.png', // leaf
  'https://i.imgur.com/p14wL8p.png', // stripe
  'https://i.imgur.com/K3aW2y0.png', // aws
  'https://i.imgur.com/Y3J3k36.png', // reddit
];