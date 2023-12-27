import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faTruck,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const elements = [
  {
    id: '1',
    imgSrc: faCreditCard,
    title: 'Pagos',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam, nunc sed vehicula lacinia, erat purus semper dui, eget gravida mi nisi ac dui.',
    link: 'Te orientamos con el pago',
    LinkRouter: '/how-pay-online',
  },
  {
    id: '2',
    imgSrc: faTruck,
    title: 'Envíos',
    message:
      'Sed porttitor orci nisi, at aliquam dolor condimentum eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    link: 'Información del envío',
    LinkRouter: '/help-shipments',
  },
  {
    id: '3',
    imgSrc: faInfo,
    title: 'Más información',
    message:
      'Vivamus sed dolor ac magna accumsan posuere quis ut libero. Integer augue nisi, molestie in eros a, sodales aliquet justo. Sed ultricies risus nisi, a fermentum tortor aliquam vitae.',
    link: 'Más información',
    LinkRouter: '/help',
  },
];

export const Footer = () => {
  return (
    <footer className="row mt-4">
      {elements.map((item) => (
        <div className="card" id="footerCard" key={item.id}>
          <div className="info-slide" id="footerCardText">
            <FontAwesomeIcon
              icon={item.imgSrc}
              id="footerIconColor"
              size="4x"
            />
            <h2 className="mt-4" id="footerTitleCard">
              {item.title}
            </h2>
            <p id="footerDescriptionCard">
              <span>{item.message}</span>
            </p>
            <Link to={item.LinkRouter} id="footerLinks">
              {item.link}
            </Link>
          </div>
        </div>
      ))}
      <hr />
      <div className="container" id="footerInfo">
        <Link id="info" to="#">
          Trabaja con nosotros
        </Link>
        <Link id="info" to="#">
          Términos y condiciones
        </Link>
        <Link id="info" to="#">
          Cómo cuidamos tu privacidad
        </Link>
        <Link id="info" to="#">
          Accesibilidad
        </Link>
        <Link id="info" to="#">
          Ayuda / PQR
        </Link>
      </div>
    </footer>
  );
};
