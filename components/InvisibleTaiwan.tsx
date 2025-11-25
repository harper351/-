import React from 'react';
import { Youtube, ExternalLink } from 'lucide-react';

const InvisibleTaiwan: React.FC = () => {
  return (
    <section id="invisible-taiwan" className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
             <Youtube className="text-red-600" size={32} />
             <h2 className="text-temple-gold text-lg font-bold tracking-[0.3em] uppercase">
               紀錄片精選
             </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide">
            看不見的台灣
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            一段關於神明、靈界與歷史的對話。透過鏡頭，我們得以一窺鎮門宮鄭成功與赤腳門神背後，那段鮮為人知的故事。
          </p>
          <div className="w-24 h-1 bg-temple-red mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Video 1 */}
          <div className="group bg-black/50 p-4 rounded-2xl border border-stone-800 hover:border-temple-gold/50 transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                className="w-full h-[300px] md:h-[360px]"
                src="https://www.youtube.com/embed/qdwqlCPWiH0" 
                title="看不見的台灣 預告"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-6 px-2">
              <h4 className="text-white text-xl font-bold font-serif mb-2 group-hover:text-temple-gold transition-colors">
                看不見的台灣 - 電影預告
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                這不是一部普通的紀錄片，這是一場人與神的溝通之旅。揭開國姓爺與荷蘭門神的世紀和解。
              </p>
              <a 
                href="https://www.youtube.com/watch?v=qdwqlCPWiH0"
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-temple-gold text-xs hover:text-white transition-colors"
              >
                <ExternalLink size={12} />
                <span>在 YouTube 上觀看</span>
              </a>
            </div>
          </div>

          {/* Video 2 */}
          <div className="group bg-black/50 p-4 rounded-2xl border border-stone-800 hover:border-temple-gold/50 transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                className="w-full h-[300px] md:h-[360px]"
                src="https://www.youtube.com/embed/B5fEb8y3N6U" 
                title="看不見的台灣 精彩片段"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
             <div className="mt-6 px-2">
              <h4 className="text-white text-xl font-bold font-serif mb-2 group-hover:text-temple-gold transition-colors">
                看不見的台灣 - 精彩片段
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                深入了解製作團隊如何紀錄下這段不可思議的旅程，見證歷史傷痕如何在當代獲得撫慰。
              </p>
              <a 
                href="https://www.youtube.com/watch?v=B5fEb8y3N6U"
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-temple-gold text-xs hover:text-white transition-colors"
              >
                <ExternalLink size={12} />
                <span>在 YouTube 上觀看</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
            <a 
              href="https://www.youtube.com/results?search_query=%E7%9C%8B%E4%B8%8D%E8%A6%8B%E7%9A%84%E5%8F%B0%E7%81%A3" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-stone-600 text-stone-300 hover:bg-temple-gold hover:text-temple-red hover:border-temple-gold transition-all duration-300 px-8 py-3 rounded-full uppercase tracking-widest text-sm"
            >
              <span>搜尋更多相關影片</span>
              <Youtube size={18} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default InvisibleTaiwan;