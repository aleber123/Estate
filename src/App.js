import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import InstagramFeed from './Components/InstagramFeed';
import Navbar from './Components/Navbar';
import Slideshow from './Components/ImageSlider';
import NewArrivals from './Components/NewArrivals';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Slideshow />
        <NewArrivals />
        <InstagramFeed />
        <Footer />
      </div>
    </Router>
  );
}

export default App;