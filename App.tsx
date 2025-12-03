import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import InvisibleTaiwan from './components/InvisibleTaiwan';
import VideoGuide from './components/VideoGuide';
import VisitInfo from './components/VisitInfo';
import ChatGuide from './components/ChatGuide';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-temple-stone text-gray-800 font-sans selection:bg-temple-red selection:text-white">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Features />
        <InvisibleTaiwan />
        <VideoGuide />
        <VisitInfo />
      </main>
      <Footer />
      <ChatGuide />
    </div>
  );
}

export default App;