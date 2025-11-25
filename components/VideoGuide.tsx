import React from 'react';
import { Play, Film } from 'lucide-react';

const VideoGuide: React.FC = () => {
  return (
    <section id="video-guide" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-temple-gold text-lg font-bold tracking-[0.3em] uppercase mb-3">
            線上參拜
          </h2>
          <h3 className="text-4xl font-serif font-bold text-temple-wood flex items-center justify-center gap-3">
            <Film className="w-8 h-8" />
            影音導覽
          </h3>
          <div className="w-24 h-1 bg-temple-red mx-auto mt-6"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            透過影像，感受鹿耳門溪口的風起雲湧，以及鎮門宮莊嚴神聖的氛圍。
          </p>
        </div>

        {/* Main Feature Video Placeholder */}
        <div className="relative w-full bg-stone-100 rounded-2xl overflow-hidden shadow-lg border border-stone-200 group">
            <div className="absolute top-4 left-4 z-20 bg-temple-red text-white px-3 py-1 rounded text-xs font-bold tracking-wider">
                最新上架
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full h-[400px] md:h-[500px] bg-stone-200 flex items-center justify-center relative overflow-hidden">
                <img 
                    src="https://picsum.photos/id/20/1200/600" 
                    alt="Video Placeholder" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                
                <button className="absolute z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/80 hover:bg-temple-gold hover:border-temple-gold hover:scale-110 transition-all duration-300 group">
                    <Play className="w-8 h-8 text-white ml-1 fill-current" />
                </button>

                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-white text-2xl font-bold mb-2">鎮門宮 - 乘願歸來的守護</h4>
                    <p className="text-gray-200">全景導覽與歷史解說 (即將上線)</p>
                </div>
            </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 items-center p-4 bg-stone-50 rounded-xl border border-stone-100 cursor-not-allowed">
                    <div className="w-24 h-16 bg-stone-300 rounded-lg flex items-center justify-center text-stone-400">
                        <Play size={20} />
                    </div>
                    <div>
                        <div className="h-4 w-32 bg-stone-200 rounded mb-2"></div>
                        <div className="h-3 w-20 bg-stone-200 rounded"></div>
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center mt-4 text-sm text-gray-400 italic">
            更多導覽影片製作中，敬請期待。
        </div>

      </div>
    </section>
  );
};

export default VideoGuide;