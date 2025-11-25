import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-temple-stone relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
         <svg width="400" height="400" viewBox="0 0 100 100" className="text-temple-red fill-current">
             <circle cx="50" cy="50" r="40" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-temple-red/30"></div>
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipMsq8q0CjD5B_yqK6xN6WqQ8yK5xQ8xQ8xQ8xQ8=s680-w680-h510" 
                // Note: Using a placeholder URL structure or assuming a valid image. 
                // Replacing with a generic temple/statue image for stability if specific one fails.
                onError={(e) => {e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Zhenmen_Temple_20130707.jpg/1200px-Zhenmen_Temple_20130707.jpg'}}
                alt="鎮門宮外觀" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-temple-gold/50"></div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-temple-wood text-lg font-bold tracking-[0.2em] uppercase mb-2">
              歷史淵源
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-temple-red mb-6">
              英雄的歸來
            </h3>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-light">
              <p>
                <span className="font-bold text-temple-wood">鎮門宮</span>，座落於鹿耳門溪口，這裡是1661年延平郡王鄭成功率軍登陸台灣的歷史現場。
              </p>
              <p>
                不同於一般的傳統廟宇，鎮門宮以<span className="font-bold text-temple-red">「明式建築」</span>風格呈現，簡潔而莊重。這裡供奉的鄭成功，不僅是受人敬仰的民族英雄，更是一位「乘願歸來」的守護神。
              </p>
              <p>
                相傳鄭成功感念這片土地，其英靈不願離去，因此在此坐鎮，守護著台灣的門戶。這裡的每一塊磚瓦，都訴說著三百多年前那場改變台灣命運的戰役，以及英雄與這片海洋深厚的情感連結。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;