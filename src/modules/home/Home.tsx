import React from 'react';

import './styles.css';

import { Header } from './shared/Header';
import { Carrousel } from './shared/Carrousel';

import uno from '../../assets/images/1.png';
import { Link } from 'react-router-dom';

const products = [
  {
    imgSrc: uno,
    title: 'Funko Pop! Naruto Shippuden - Tobi',
    hasOffer: true,
    priceInitial: 100,
    priceFinal: 65,
    discount: '35%',
  },
  {
    imgSrc: uno,
    title: 'Funko Pop! Naruto Shippuden - Naruto',
    hasOffer: false,
    priceInitial: 65,
    priceFinal: 65,
    discount: '0%',
  },
  {
    imgSrc: uno,
    title: 'Funko Pop! Naruto Shippuden - Sasuke',
    hasOffer: true,
    priceInitial: 70,
    priceFinal: 35,
    discount: '50%',
  },
  {
    imgSrc: uno,
    title: 'Funko Pop! Naruto Shippuden - Madara',
    hasOffer: false,
    priceInitial: 65,
    priceFinal: 65,
    discount: '0%',
  },
  {
    imgSrc: uno,
    title: 'Funko Pop! Naruto Shippuden - Minato',
    hasOffer: false,
    priceInitial: 65,
    priceFinal: 65,
    discount: '0%',
  },
];

export const Home = () => {
  return (
    <>
      <Header />
      <Carrousel />
      <div className="row" id="cardsContainer">
        {products.map((item) => (
          <div className="card">
            <Link to="/" id="cardData">
              <img src={uno} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" id="titleCard">
                  {item.title}
                </p>
                {item.hasOffer && <del>{`$ ${item.priceInitial}.000`}</del>}
                <div className="column" id="infoPrice">
                  <div className="card-text" id="Price">
                    {`$ ${item.priceFinal}.000`}
                  </div>
                  <div className="card-text" id="discount">
                    {item.hasOffer && item.discount}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
