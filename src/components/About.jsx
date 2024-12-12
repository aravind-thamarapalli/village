import React from 'react';

const About = () => {
    return (
      <div>
        <h1>Welcome to Tenali</h1>
        <p>Tenali is a beautiful City located in the southern part of India.</p>
        <h2>Highlights</h2>
        <ul className="highlights">
          <li className="high-el">Beautiful Tri-canal</li>
          <li className="high-el">Historic temples</li>
          <li className="high-el">Friendly and welcoming community</li>
        </ul>
        <h2>Gallery</h2>
        <div className="gallery">
          <img
            src="https://i.ytimg.com/vi/zRxKIHD94VM/maxresdefault.jpg"
            alt="Scenic view 1"
          />
          <img
            src="https://th.bing.com/th/id/OIP.01L7cBRABVXzFhYLn8z7vQHaE7?rs=1&pid=ImgDetMain"
            alt="Scenic view 2"
          />
          <img
            src="https://facts.net/wp-content/uploads/2023/07/35-facts-about-tenali-1689758860.jpeg"
            alt="Scenic view 3"
          />
          <img
            src="https://th.bing.com/th/id/OIP.uUBJg6zdmQ2lMt4XuX82RAHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Scenic view 4"
          />
        </div>
        <button
          className="hero-link"
          onClick={() => (window.location.href = "/hero")}
        >
          Go to Hero Page
        </button>
      </div>
    );
};

export default About;