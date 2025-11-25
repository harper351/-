import React from 'react';
import { FeatureItem } from '../types';

interface FeatureCardProps {
  item: FeatureItem;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ item, index }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
      <div className="relative h-80 w-full overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-temple-wood via-transparent to-transparent opacity-90" />
      </div>
      
      <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-3 mb-2">
            <span className="text-temple-gold font-serif text-4xl font-bold opacity-80 leading-none">0{index + 1}</span>
            <h3 className="text-white text-2xl font-serif font-bold tracking-wide leading-none">{item.title}</h3>
        </div>
        <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3 md:line-clamp-none">
          {item.description}
        </p>
      </div>
      
      {/* Mobile optimization: show a hint of description if not hovering */}
      <div className="md:hidden absolute bottom-4 right-4 text-white/50">
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </div>
    </div>
  );
};

export default FeatureCard;