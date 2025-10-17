import React from 'react';
import PostCard from './PostCard';
import { DUMMY_POSTS } from '../data/mockData'; 


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