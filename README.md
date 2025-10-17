Proje Dökümantasyonu: E-Commerce Frontend Uygulaması
1. Proje Özeti
Bu proje, verilen bir Figma tasarımına dayanarak sıfırdan oluşturulmuş, modern bir e-ticaret web uygulamasının frontend (ön yüz) kısmıdır. Uygulama, Vite, React ve Redux Toolkit gibi modern teknolojiler kullanılarak geliştirilmiştir ve tamamen responsive (mobil uyumlu) bir yapıya sahiptir. Proje, gerçek bir backend'e bağlanmaya hazır, tam işlevsel bir prototip aşamasındadır.
2. Kullanılan Teknolojiler
•	Geliştirme Ortamı: Vite
•	Kütüphane: React
•	Stil: Tailwind CSS
•	State (Durum) Yönetimi: Redux Toolkit & React-Redux
•	Routing (Sayfa Yönlendirme): React Router
•	İkonlar: Lucide React
3. Proje Özellikleri ve İşlevsellik
✅ Responsive Sayfa Yapısı:
•	Ana Sayfa (HomePage)
•	Mağaza / Ürün Listeleme Sayfası (ShopPage)
•	Ürün Detay Sayfası (ProductDetailPage)
•	Alışveriş Sepeti Sayfası (CartPage)
•	Ödeme Sayfası (CheckoutPage)
•	Statik Sayfalar (Hakkımızda, Blog, İletişim)
•	Kullanıcı Giriş ve Kayıt Sayfaları (LoginPage, RegisterPage)
✅ Dinamik ve Responsive Header:
•	Masaüstü Görünümü: Açılır "Shop" menüsü ve dinamik kullanıcı durumu gösterimi.
•	Mobil Görünüm: Tam ekran açılır hamburger menü ve dinamik kullanıcı durumu gösterimi.
✅ Merkezi State Yönetimi (Redux Toolkit):
•	productSlice: Tüm ürün verilerini ve kategori filtreleme mantığını yönetir.
•	cartSlice: Alışveriş sepetindeki ürünleri, miktarları ve toplam adedi yönetir.
•	authSlice: Kullanıcının giriş yapıp yapmadığını ve kullanıcı bilgilerini simüle eder.
✅ Alışveriş Sepeti İşlevselliği:
•	Ürün detay sayfasından sepete ürün ekleme.
•	Header'da sepetteki toplam ürün sayısını anlık olarak gösterme.
•	Sepet sayfasında ürün miktarını artırma, azaltma ve ürünü tamamen sepetten çıkarma.
•	Kalıcı Sepet: localStorage entegrasyonu sayesinde, kullanıcı sayfayı yenilediğinde veya tarayıcıyı kapatıp açtığında sepet içeriği kaybolmaz.
✅ Dinamik Ürün Filtreleme:
•	Mağaza sayfasında, kategorilere tıklandığında ürün listesi Redux state'i üzerinden anlık olarak güncellenir.
✅ Kullanıcı Giriş (Authentication) Simülasyonu:
•	Kullanıcı, login formunu doldurarak giriş işlemini simüle edebilir.
•	Giriş yapıldığında, Header'daki "Login / Register" bölümü, "Welcome, [Kullanıcı Adı]" ve "Logout" butonu ile değişir.
4. Klasör Yapısı
Projenin kod organizasyonu, modüler ve yönetilebilir bir yapı sağlamak üzere aşağıdaki gibi tasarlanmıştır:
src/
|-- assets/              // Resim, font gibi statik varlıklar
|-- components/          // Tekrar kullanılabilir küçük bileşenler (ProductCard, CartItem vb.)
|-- data/                // Merkezi sahte veri dosyaları (mockData.js)
|-- layout/              // Sayfa düzenini oluşturan ana bileşenler (Header, Footer vb.)
|-- pages/               // Her bir sayfayı temsil eden ana bileşenler (HomePage, ShopPage vb.)
|-- store/               // Redux state yönetimi ile ilgili tüm dosyalar
|   |-- slices/          // Her bir state dilimi için dosyalar (productSlice, cartSlice vb.)
|   |-- index.js         // Tüm slice'ları birleştirip ana store'u oluşturan dosya
|-- utils/               // Yardımcı fonksiyonlar (localStorage.js vb.)
|-- App.jsx              // Ana uygulama bileşeni ve sayfa yönlendirmeleri (Routing)
|-- main.jsx             // Uygulamanın başlangıç noktası, Redux Provider'ı burada bulunur
|-- index.css            // Global stiller ve Tailwind CSS direktifleri
5. State Yönetimi (Redux) Mimarisi
•	Store: src/store/index.js dosyasında configureStore ile oluşturulmuştur. localStorage ile senkronize çalışarak sepet verilerini kalıcı hale getirir.
•	Slices (Dilimler):
o	productSlice:
	initialState: products (tüm ürünler dizisi) ve filters (aktif filtreler objesi).
	reducers: setCategoryFilter (kategori filtresini günceller).
o	cartSlice:
	initialState: items (sepetteki ürünler dizisi) ve totalQuantity (toplam ürün adedi).
	reducers: addToCart, decreaseQuantity, removeFromCart.
o	authSlice:
	initialState: isAuthenticated (boolean) ve user (kullanıcı bilgileri objesi).
	reducers: login, logout.
6. Routing (Sayfa Yönlendirme)
App.jsx içinde react-router-dom kullanılarak aşağıdaki rotalar tanımlanmıştır:
•	/: HomePage
•	/shop: ShopPage
•	/product/:id: ProductDetailPage (Dinamik rota)
•	/cart: CartPage
•	/checkout: CheckoutPage
•	/about, /blog, /contact: İlgili statik sayfalar
•	/login, /register: Kullanıcı giriş/kayıt sayfaları
7. Sonraki Adımlar: Backend ve API Entegrasyonu
Projenin bu sağlam frontend temeli üzerine inşa edilecek sonraki aşama, uygulamayı dinamik ve gerçek verilerle çalışır hale getirmektir.
•	Backend Sunucusu Oluşturma: Node.js (Express), Python (Django/Flask) veya başka bir teknoloji ile bir backend sunucusu geliştirilecek.
•	Veritabanı Tasarımı: Ürünler, kullanıcılar, siparişler gibi verileri depolamak için bir veritabanı şeması (örn: PostgreSQL, MongoDB) tasarlanacak.
•	API Endpoints Geliştirme:
o	GET /api/products: Tüm ürünleri getiren endpoint.
o	GET /api/products/:id: Tek bir ürünü getiren endpoint.
o	POST /api/auth/register: Kullanıcı kaydı.
o	POST /api/auth/login: Kullanıcı girişi.
o	POST /api/orders: Sipariş oluşturma vb.
•	Frontend'de API İstekleri: mockData.js dosyasındaki sahte veriler, axios veya fetch kullanılarak bu API endpoint'lerine yapılan gerçek isteklerle değiştirilecek.
•	Redux'ta Asenkron İşlemler: Redux Toolkit'in createAsyncThunk özelliği kullanılarak, API'den veri çekme gibi asenkron işlemler Redux slice'ları içinde yönetilecek.

