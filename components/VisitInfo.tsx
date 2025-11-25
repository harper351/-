import React from 'react';
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';

const VisitInfo: React.FC = () => {
  return (
    <section id="visit" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Info */}
          <div className="p-10 md:w-1/3 bg-temple-red text-white flex flex-col justify-center">
            <h3 className="text-3xl font-serif font-bold mb-8 border-b border-temple-gold/30 pb-4">參拜資訊</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-temple-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-temple-gold mb-1">地址</h4>
                  <p className="text-stone-200 leading-relaxed">台南市安南區媽祖宮一街345巷420號<br/>(鹿耳門溪口)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-temple-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-temple-gold mb-1">開放時間</h4>
                  <p className="text-stone-200">每日 08:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-temple-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-temple-gold mb-1">聯絡電話</h4>
                  <p className="text-stone-200">06-284-1162</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <Calendar className="text-temple-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-temple-gold mb-1">重要祭典</h4>
                  <p className="text-stone-200">農曆四月二十九日 (鄭成功聖誕)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="md:w-2/3 h-[400px] md:h-auto bg-stone-200 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.082177587272!2d120.12681531532935!3d23.02073642217591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346dd86056664733%3A0x159818263620038d!2z6Y6u6ZaA5a6u77yI6Y6u5rO15a6u5qiT6YCa6Zm45Z-f6ZaL5Y-w5Zub55m-5bm057SA5b-15YWs5ZyS77yJ!5e0!3m2!1szh-TW!2stw!4v1645452684231!5m2!1szh-TW!2stw" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Zhenmen Palace Map"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisitInfo;