import React from 'react';
import PostCard from './PostCard';

// Sahte gönderi verileri
const DUMMY_POSTS = [
  {
    id: 1,
    title: 'Loudest à la Madison #1 (L\'integral)',
    description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
    imageUrl: 'https://images.unsplash.com/photo-1533228100845-08e2e4b7832a?q=80&w=1887',
    date: '22 April 2021',
    comments: 10
  },
  {
    id: 2,
    title: 'Loudest à la Madison #1 (L\'integral)',
    description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
    imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=1770',
    date: '22 April 2021',
    comments: 10
  },
  {
    id: 3,
    title: 'Loudest à la Madison #1 (L\'integral)',
    description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
    imageUrl: 'https://images.unsplash.com/photo-1599422502931-86a0a9960a58?q=80&w=1770',
    date: '22 April 2021',
    comments: 10
  },
];

const FeaturedPosts = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h6 className="text-sm font-bold text-blue-500 mb-2">Practice Advice</h6>
        <h2 className="text-4xl font-bold text-slate-800 mb-2">Featured Posts</h2>
        <p className="text-sm text-gray-500 mb-12 max-w-md mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>

        {/* Gönderi Kartları Grid'i */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {DUMMY_POSTS.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;