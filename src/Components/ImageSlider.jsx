import React, { useState, useEffect } from 'react';
import logo from './img/bild1.jpg';
import logo1 from './img/bild2.jpg';
import logo2 from './img/bild3.jpg';
import './Slideshow.css';
import fontStyles from '../Fonts.module.css';
// Importing arrow icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [logo, logo1, logo2];
  const texts = ['SELL WITH US - We ensure your property stands out and sells for its true value', 'BUY WITH US - Find Your Dream Home with us.', 'YOUR TRUSTED PARTNER - From the first consultation to the final handshake.'];

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 75) {
      nextSlide();
    } else if (touchStartX - touchEndX < -75) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <IoIosArrowBack className="slide-arrow left-arrow" onClick={prevSlide} />
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        />
      ))}
      <IoIosArrowForward className="slide-arrow right-arrow" onClick={nextSlide} />
      <div className="slide-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      <div className={`${fontStyles.h4} overlay-text`}>{texts[currentSlide]}</div>
    </div>
  );
};

export default Slideshow;
