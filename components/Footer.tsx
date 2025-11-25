import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Simulate visitor counting
    // In a real app, this would fetch from a backend API
    const storageKey = 'temple_visitor_count';
    const baseCount = 0;
    
    try {
      const stored = localStorage.getItem(storageKey);
      let current = stored ? parseInt(stored, 10) : baseCount;
      
      // Increment for current session
      // Note: In React StrictMode (dev), this might run twice, which is acceptable for this demo
      current += 1;
      
      localStorage.setItem(storageKey, current.toString());
      setVisitorCount(current);
    } catch (e) {
      console.error('Local storage access failed', e);
    }
  }, []);

  return (
    <footer className="bg-temple-wood text-stone-300 py-12 border-t-4 border-temple-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-8 h-8 bg-temple-gold rounded-full flex items-center justify-center text-temple-red font-bold text-sm">
                鄭
             </div>
            <span className="text-white font-serif font-bold text-xl">鎮門宮</span>
          </div>
          <p className="text-sm opacity-70">守護台灣歷史記憶的起點</p>
        </div>

        {/* Visitor Count Display */}
        <div className="flex flex-col items-center justify-center p-4 bg-black/20 rounded-lg border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-temple-gold mb-1 text-xs uppercase tracking-widest opacity-80">
                <Users size={14} />
                <span>累積瀏覽人數</span>
            </div>
            <div className="font-mono text-2xl text-white tracking-widest font-bold drop-shadow-md">
                {visitorCount.toLocaleString()}
            </div>
        </div>

        <div className="text-sm text-center md:text-right opacity-60">
          <p>&copy; {new Date().getFullYear()} 台南鎮門宮. All rights reserved.</p>
          <p className="mt-1">此網站為數位導覽展示，非官方網站。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;