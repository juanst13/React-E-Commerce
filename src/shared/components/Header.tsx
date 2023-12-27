import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShop,
  faCartShopping,
  faMicrochip,
} from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="row">
            <div className="container-fluid" id="flex-container">
              <Link to="/" className="navbar-brand" id="logoLink">
                <div className="row" id="logoDiv">
                  <div>
                    <FontAwesomeIcon icon={faShop} id="shopIcon" className='me-2'/>
                    <FontAwesomeIcon icon={faMicrochip} id="leafIcon" /> 
                  </div>
                  <div>Tecno-Market</div>
                </div>
              </Link>
              <form className="d-flex" role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Buscar productos..."
                  aria-label="Search"
                  id="inputSearch"
                />
              </form>
              <p id="message">Ingresa para disfrutar de nuestras ofertas!</p>
            </div>
            <div id="flex-container">
              <p id="message">Mejores productos</p>
              <ul>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="link"
                  >
                    Categorías
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Figuras de acción
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Juegos
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Mangas
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/login" id="link">
                    Ofertas
                  </Link>
                </li>
                <li>
                  <Link to="/login" id="link">
                    Historial
                  </Link>
                </li>
                <li>
                  <Link to="/login" id="link">
                    Vender
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/register" id="link">
                    Crea tu cuenta
                  </Link>
                </li>
                <li>
                  <Link to="/login" id="link">
                    Ingresa
                  </Link>
                </li>
                <li>
                  <Link to="/login" id="link">
                    Mis compras
                  </Link>
                </li>
                <li>
                  <Link to="/login" id="link">
                    <FontAwesomeIcon icon={faCartShopping} id="cartIcon" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
