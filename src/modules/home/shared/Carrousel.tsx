import React from 'react';

import dos from '../../../assets/images/2.jpeg';
import tres from '../../../assets/images/3.jpeg';
import cuatro from '../../../assets/images/4.jpeg';

export const Carrousel = () => {
  return (
    <div id="carouselHome" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active container">
          <div className="row" id="descriptionImage">
            <img src={dos} className="d-block" alt={dos} id="imgSlider" />
            50% Off!
          </div>
        </div>
        <div className="carousel-item container">
          <div className="row" id="descriptionImage">
            <img src={tres} className="d-block" alt={dos} id="imgSlider" />
            50% Off!
          </div>
        </div>
        <div className="carousel-item container">
          <div className="row" id="descriptionImage">
            <img src={cuatro} className="d-block" alt={dos} id="imgSlider" />
            50% Off!
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
