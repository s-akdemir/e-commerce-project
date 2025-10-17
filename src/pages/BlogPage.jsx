import React from 'react';
import FeaturedPosts from '../components/FeaturedPosts'; // Mevcut bileşenimizi kullanalım

const BlogPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-slate-800">Our Blog</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed mb-12">
          Stay updated with our latest news, articles, and stories.
        </p>
        
        {/* Ana sayfadaki bileşeni burada yeniden kullanıyoruz */}
        <FeaturedPosts />
      </div>
    </div>
  );
};

export default BlogPage;