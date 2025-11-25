import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Temple Atmosphere" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-temple-red/30 to-temple-stone"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="border-4 border-temple-gold/80 p-8 md:p-12 bg-black/30 backdrop-blur-sm rounded-sm">
          <h2 className="text-temple-gold text-lg md:text-2xl font-medium mb-4 tracking-[0.5em] uppercase">
            鹿耳門溪口
          </h2>
          <h1 className="text-white font-serif text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg tracking-wider leading-tight">
            鄭成功<br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            乘願歸來
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed tracking-wide">
            守護台灣的門戶，見證歷史的浪潮。<br/>
            在這裡，英雄不曾遠去，只是換了形式歸來。
          </p>
          
          <div className="mt-10">
            <a 
              href="#about"
              className="inline-block border border-white text-white hover:bg-temple-gold hover:border-temple-gold hover:text-temple-red transition-all duration-300 px-8 py-3 rounded-sm uppercase tracking-widest text-sm"
            >
              進入導覽
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-temple-wood/70">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;