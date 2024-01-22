import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import SocialLinks from './Components/SocialLinks';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
// import other components

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SocialLinks />
      <MainContent />
      <Footer />
      {/* other components */}
    </div>
  );
}

export default App;
