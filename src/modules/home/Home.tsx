import React from 'react';

import './styles.css';

import { Header } from './shared/Header';
import { Carrousel } from './shared/Carrousel';

import NS from '../../assets/images/NS.png';
import TNS from '../../assets/images/TNS.png';
import ANS from '../../assets/images/ANS.png';
import PNS from '../../assets/images/PNS.png';
import NH from '../../assets/images/NH.png';

import { Link } from 'react-router-dom';
import { Footer } from './shared/Footer';

const products = [
  {
    id: '1',
    imgSrc: TNS,
    title: 'Funko Pop! Naruto Shippuden - Tobi',
    hasOffer: true,
    priceInitial: 100,
    priceFinal: 65,
    discount: '35%',
  },
  {
    id: '2',
    imgSrc: NS,
    title: 'Funko Pop! Naruto Shippuden - Naruto',
    hasOffer: false,
    priceInitial: 65,
    priceFinal: 65,
    discount: '0%',
  },
  {
    id: '3',
    imgSrc: ANS,
    title: 'Funko Pop! Naruto Shippuden - Asuma',
    hasOffer: true,
    priceInitial: 70,
    priceFinal: 35,
    discount: '50%',
  },
  {
    id: '4',
    imgSrc: PNS,
    title: 'Funko Pop! Naruto Shippuden - Pain',
    hasOffer: false,
    priceInitial: 65,
    priceFinal: 65,
    discount: '0%',
  },
  {
    id: '5',
    imgSrc: NH,
    title: 'Funko Pop! Naruto Shippuden - Neji',
    hasOffer: false,
    priceInitial: 65,
    priceFinal: 65,
    discount: '0%',
  },
];

export const Home = () => {
  return (
    <div id='container'>
      <Header />
      <Carrousel />
      <div className="row mt-3" id="cardsContainer">
        <h3 className="ms-5" id="title">
          Más populares
        </h3>
        {products.map((item) => (
          <div className="card" key={item.id}>
            <Link to="/" id="cardData">
              <img
                src={item.imgSrc}
                className="card-img-top"
                alt="..."
                id="imageCard"
              />
              <div className="card-body">
                <p className="card-text" id="titleCard">
                  {item.title}
                </p>
                {item.hasOffer ? (
                  <del>{`$ ${item.priceInitial}.000`}</del>
                ) : (
                  <br />
                )}
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
      <Footer />
    </div>
  );
};
