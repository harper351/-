import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '關於鎮門宮', href: '#about' },
    { name: '特色文物', href: '#features' },
    { name: '看不見台灣', href: '#invisible-taiwan' },
    { name: '影音導覽', href: '#video-guide' },
    { name: '參拜資訊', href: '#visit' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-temple-red shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2 text-white">
             <div className="w-10 h-10 bg-temple-gold rounded-full flex items-center justify-center text-temple-red font-bold border-2 border-white">
                鄭
             </div>
             <span className={`font-serif font-bold text-xl tracking-widest ${isScrolled ? 'text-white' : 'text-temple-wood drop-shadow-md lg:text-white'}`}>
               鎮門宮
             </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-100 hover:text-temple-gold hover:scale-105 transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://maps.app.goo.gl/generic" 
                target="_blank"
                rel="noreferrer"
                className="bg-temple-gold text-temple-red hover:bg-yellow-400 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1 transition-colors"
              >
                <MapPin size={16} />
                交通指引
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-red-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-temple-red shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-100 hover:bg-red-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;