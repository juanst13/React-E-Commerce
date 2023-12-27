import React from 'react';
import { Link } from 'react-router-dom';
import { applyDiscount, formatMoney } from '../utils/genericFunctions';
import { useDispatch } from 'react-redux';
import { ProductProps, addProduct } from '../../redux/slices/productSlice';

interface CardProps {
  id: string;
  imgSrc: string;
  title: string;
  price: number;
  discount: number;
}

export const SalesCard: React.FC<CardProps> = ({
  id,
  imgSrc,
  title,
  price,
  discount,
}) => {
  const dispatch = useDispatch();

  const hasOffer = !!discount;
  const priceOffer = hasOffer && formatMoney(applyDiscount(price, discount));

  const onClickItem = (item: ProductProps) => {
    dispatch(addProduct(item));
  };

  return (
    <div
      className="card p-3"
      key={id}
      onClick={() =>
        onClickItem({
          title,
          image: imgSrc,
          price,
          discount,
          stock: 10,
          seller: 'Ruben Kang',
          description: 'Description product',
          detail: 'Detalles',
          questionsAndAswers: {},
        })
      }
    >
      <Link to="/product" id="cardData">
        <img src={imgSrc} className="card-img-top" alt="..." id="imageCard" />
        <div className="card-body">
          <p className="card-text" id="titleCard">
            {title}
          </p>
          {hasOffer ? <del>{formatMoney(price)}</del> : <br />}
          <div className="column" id="infoPrice">
            <div className="card-text" id="Price">
              {priceOffer ? priceOffer : formatMoney(price)}
            </div>
            <div className="card-text" id="discount">
              {hasOffer && `${discount}% OFF`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
