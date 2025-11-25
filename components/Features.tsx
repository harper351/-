import React from 'react';
import FeatureCard from './FeatureCard';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    id: '1',
    title: '赤腳門神',
    description: '全台獨有的西洋門神，形象為荷蘭人。傳說是鄭成功打敗荷蘭人後，由洋人為其守門。因畫師認為洋人鞋子難畫而讓其赤腳，信徒感念其辛勞，常供奉鞋子。',
    imageUrl: 'https://pic.pimg.tw/hx270/1458483851-2927358017_n.jpg' // Placeholder or real URL assumption
  },
  {
    id: '2',
    title: '國姓爺銅像',
    description: '鎮殿的鄭成功坐像，神態莊嚴威武，目光炯炯有神地注視著鹿耳門海口，象徵著守護台灣的決心與願力。',
    imageUrl: 'https://www.twtainan.net/image/7475/640x480'
  },
  {
    id: '3',
    title: '鹿耳門夕照',
    description: '位於出海口的地理優勢，讓這裡擁有絕美的夕陽景色。當金黃色的陽光灑落在廟宇屋脊與海面上，波光粼粼，美不勝收。',
    imageUrl: 'https://images.unsplash.com/photo-1615530359832-592445c4750e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-temple-gold text-lg font-bold tracking-[0.3em] uppercase mb-3">
            獨特文化
          </h2>
          <h3 className="text-4xl font-serif font-bold text-temple-wood">
            鎮門宮三大特色
          </h3>
          <div className="w-24 h-1 bg-temple-red mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} item={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;