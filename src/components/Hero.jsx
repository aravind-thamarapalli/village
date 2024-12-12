import React from 'react';

const Hero = () => {
    return (
      <>
        <img
          src="https://i.ytimg.com/vi/vkSdugWC4kU/maxresdefault.jpg"
          alt="Hometown"
          className="hero-image"
        />
        <div className="hero-container">
          <h1>Welcome to Our Hometown</h1>
          <h1 style={{ color: "pink" }}>TENALI</h1>
          <p>Discover the beauty and charm of our beloved village.</p>

          <nav className="hero-nav">
            <a href="/village/landmarks" className="hero-link">
              Landmarks
            </a>
            <a href="/village/about" className="hero-link">
              About
            </a>
          </nav>
        </div>
      </>
    );
};

export default Hero;