import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Brady Mitchelmore</h1>
          <p>Welcome to my personal website. I'm a Computer Science student with a passion for smart systems and data analysis.</p>
          <a href="#projects" className="hero-button">Check out my projects</a>
        </div>
        <div className="hero-image">
          <img src='src/assets/personal.jpeg' alt="Brady Mitchelmore" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
