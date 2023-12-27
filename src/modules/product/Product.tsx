import React, { useState } from 'react';

import './styles.css';
import { useSelector } from 'react-redux';
import {
  applyDiscount,
  formatMoney,
} from '../../shared/utils/genericFunctions';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Rating,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Header } from '../../shared/components/Header';
import { Footer } from '../../shared/components/Footer';

export const Product = () => {
  const {
    title,
    image,
    price,
    discount,
    stock,
    seller,
    description,
    detail,
    questionsAndAswers,
  } = useSelector((state: any) => state.product);

  const [rating, setRating] = useState<number>(4.5);
  const [units, setUnits] = useState<string>('1 unidad');
  const [unit, setUnit] = useState<string>('1 unidad');

  const handleClickSetunits = () => setUnits(unit);

  const hasOffer = !!discount;

  const setUnitsBuy = (unit: string) => {
    setUnits(unit);
  };

  return (
    <div id="container">
      <Header />
      <div className="container" id="containerPlus">
        <div>
          <img src={image} alt="img-product" />
        </div>
        <div id="productInfo">
          <h4>{title}</h4>
          <p id="ratingInfo">
            {rating}
            <Rating
              id="rating"
              name="half-rating-read"
              defaultValue={2.5}
              value={rating}
              precision={0.5}
              readOnly
            />
            (100)
          </p>
          {hasOffer && <del id="delOffer">{formatMoney(price)}</del>}
          <div id="discountInfo">
            <p id="priceInfo">{formatMoney(applyDiscount(price, discount))}</p>
            <p id="offer">{hasOffer && `${discount}% OFF`}</p>
          </div>
          <p>
            <Link to="#" style={{ textDecoration: 'none' }}>
              Ver medios de pago
            </Link>
          </p>
          <p>
            <strong>Envío a nivel nacional</strong>
            <br /> Conoce los tiempos y las formas de envío.
            <br />
            <Link to="#" style={{ textDecoration: 'none' }}>
              Calcular cuándo llega
            </Link>
          </p>
          <p>
            <strong>Devolución gratis</strong>
            <br /> Tienes 30 días desde que lo recibes. <br />
            <Link to="#" style={{ textDecoration: 'none' }}>
              Conocer más
            </Link>
          </p>
          <p>
            <strong>Stock disponible</strong>
          </p>
          <div id="StockInfo">
            Cantidad:
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-ligth dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="dropdownMenuClickable"
                data-bs-auto-close="false"
              >
                <strong>{units}</strong>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuClickable"
              >
                <li
                  className="dropdown-item"
                  onClick={() => setUnitsBuy('2 unidades')}
                >
                  2 unidades
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => setUnitsBuy('3 unidades')}
                >
                  3 unidades
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => setUnitsBuy('4 unidades')}
                >
                  4 unidades
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => setUnitsBuy('5 unidades')}
                >
                  5 unidades
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => setUnitsBuy('6 unidades')}
                >
                  6 unidades
                </li>
                {units === 'Más de 6 unidades' ? (
                  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Cantidad
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type="text"
                      onChange={({ target }) =>
                        setUnit(`${target.value} unidades`)
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleClickSetunits}
                          >
                            Aplicar
                          </button>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                ) : (
                  <li
                    className="dropdown-item"
                    onClick={() => setUnitsBuy('Más de 6 unidades')}
                  >
                    Más de 6 unidades
                  </li>
                )}
              </ul>
            </div>{' '}
            (11 disponibles)
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClickSetunits}
            style={{ height: '50px' }}
          >
            Comprar ahora
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClickSetunits}
            style={{
              marginTop: '5px',
              height: '50px',
              backgroundColor: '#e3edfb',
              borderColor: '#e3edfb',
              color: '#3885fa',
            }}
          >
            Agregar al carrito
          </button>
          <div id="sellerInfo">
            Vendido por{' '}
            <Link to="#" style={{ textDecoration: 'none' }}>
              {seller}
            </Link>
            <p>
              MercadoLíder | <strong>+5mil ventas</strong>
            </p>
            <p>
              <Link to="#" style={{ textDecoration: 'none' }}>
                Compra Protegida
              </Link>
              , recibe el producto que esperabas o te devolvemos tu dinero.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
