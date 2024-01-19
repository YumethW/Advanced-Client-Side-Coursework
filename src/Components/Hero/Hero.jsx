import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter hero-container">
        {/* Left content */}

        <div className="flexColStart hero-left">
          <div className="hero-title">
            <h1>
              Discover Your <br /> Dream Home <br /> Today
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span>Discover a seamless property search experience.</span>
            <span>
              Browse, filter, and explore a variety of listings effortlessly.
            </span>
          </div>
        </div>

        <div className="flexCenter stats"></div>

        {/* Right content */}

        <div className="flexCenter hero right">
          <div className="image-container">
            <img src="./house.svg" alt="Header section image" />
          </div>
        </div>
      </div>
    </section>
  );
};
