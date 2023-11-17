import React from 'react';

import pc from '../../../assets/images/1.webp';
import consoles from '../../../assets/images/3.jpeg';
import smartphones from '../../../assets/images/2.jpeg';

export const Carrousel = () => {
  return (
    <div id="carouselHome" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row" id="descriptionImage">
            <img src={pc} className="d-block" alt="pc" id="imgSlider" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="row" id="descriptionImage">
            <img
              src={consoles}
              className="d-block"
              alt="videogames"
              id="imgSlider"
            />
          </div>
        </div>
        <div className="carousel-item">
          <div className="row" id="descriptionImage">
            <img
              src={smartphones}
              className="d-block"
              alt="smartphones"
              id="imgSlider"
            />
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselHome"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselHome"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
