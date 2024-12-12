import React from 'react';

const landmarks = [
  {
    name: "Town Church",
    description: "A historic town church in the center of the village.",
    image:
      "https://th.bing.com/th/id/OIP.01L7cBRABVXzFhYLn8z7vQHaE7?rs=1&pid=ImgDetMain",
  },
  {
    name: "Vikuntapuram Temple",
    description: "An old mill by the river.",
    image:
      "https://th.bing.com/th/id/OIP.mCPUg5S4gVwRR1cT_6xakwHaFj?rs=1&pid=ImgDetMain",
  },
  {
    name: "Town Market",
    description: "The main market of the town.",
    image:
      "https://cdma.ap.gov.in/sites/default/files/styles/large/public/Mahatma_Gandhi_municipal_market_complex.jpg?itok=4MMFzXgU",
  },
  {
    name: "Ganesh Temple",
    description: "A beautiful temple dedicated to Lord Ganesha.",
    image: "https://i.ytimg.com/vi/YEZooSiC6L0/maxresdefault.jpg",
  },
];

const Landmarks = () => {
    return (
      <div>
        <h1>Landmarks of Tenali</h1>
        <div className="landmarks">
          {landmarks.map((landmark, index) => (
            <div key={index} className="landmark">
              <h2>{landmark.name}</h2>
              <p>{landmark.description}</p>
              <img src={landmark.image} alt={landmark.name} />
            </div>
          ))}
        </div>
        <button
        className="hero-link"
        onClick={() => (window.location.href = "/hero")}>
          Go to Hero Page
        </button>
      </div>
    );
};

export default Landmarks;