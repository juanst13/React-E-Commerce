import './styles.css';

import { Carrousel } from '../../shared/components/Carrousel';

import NS from '../../assets/images/NS.png';
import TNS from '../../assets/images/TNS.png';
import ANS from '../../assets/images/ANS.png';
import PNS from '../../assets/images/PNS.png';
import NH from '../../assets/images/NH.png';

import { SalesCard } from '../../shared/components/SalesCard';

const products = [
  {
    id: '1',
    imgSrc: TNS,
    title: 'Funko Pop! Naruto Shippuden - Tobi',
    price: 100000,
    discount: 0,
  },
  {
    id: '2',
    imgSrc: NS,
    title: 'Funko Pop! Naruto Shippuden - Naruto',
    price: 65000,
    discount: 10,
  },
  {
    id: '3',
    imgSrc: ANS,
    title: 'Funko Pop! Naruto Shippuden - Asuma',
    price: 70000,
    discount: 0,
  },
  {
    id: '4',
    imgSrc: PNS,
    title: 'Funko Pop! Naruto Shippuden - Pain',
    price: 65000,
    discount: 50,
  },
  {
    id: '5',
    imgSrc: NH,
    title: 'Funko Pop! Naruto Shippuden - Neji',
    price: 100000,
    discount: 35,
  },
];

export const Home = () => {
  return (
    <div id="container">
      <Carrousel />
      <div className="row mt-3" id="cardsContainer">
        <h3 className="ms-5" id="title">
          Más populares
        </h3>
        {products.map(({ id, imgSrc, title, price, discount }) => (
          <SalesCard
            key={id}
            id={id}
            imgSrc={imgSrc}
            title={title}
            price={price}
            discount={discount}
          />
        ))}
      </div>
    </div>
  );
};
