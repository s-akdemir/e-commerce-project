import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MessageCircle, ChevronRight } from 'lucide-react';

// Bu bileşen dışarıdan 'post' objesi alacak
const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col shadow-lg rounded overflow-hidden bg-white">
      {/* Resim Alanı */}
      <div className="relative">
        <img className="w-full h-64 object-cover" src={post.imageUrl} alt={post.title} />
        <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
          NEW
        </span>
      </div>

      {/* İçerik Alanı */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Etiketler */}
        <div className="flex gap-4 text-xs font-bold text-gray-500 mb-2">
          <span className="text-blue-400">Google</span>
          <span>Trending</span>
          <span>New</span>
        </div>

        {/* Başlık */}
        <h4 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
          {post.title}
        </h4>

        {/* Açıklama */}
        <p className="text-sm text-gray-500 mb-4 flex-grow">
          {post.description}
        </p>

        {/* Tarih ve Yorumlar */}
        <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={16} />
            <span>{post.comments} comments</span>
          </div>
        </div>
        
        {/* Daha Fazla Öğren Linki */}
        <Link to="#" className="font-bold text-gray-500 text-sm flex items-center gap-2 hover:text-slate-800">
          Learn More <ChevronRight size={16} className="text-blue-500" />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;