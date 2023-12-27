import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faMicrochip } from '@fortawesome/free-solid-svg-icons';

export const HeaderBasic = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="row">
            <div className="container-fluid" id="flex-container">
              <Link to="/" className="navbar-brand" id="logoLink">
                <div className="row" id="logoDiv">
                  <div>
                    <FontAwesomeIcon
                      icon={faShop}
                      id="shopIcon"
                      className="me-2"
                    />
                    <FontAwesomeIcon icon={faMicrochip} id="leafIcon" />
                  </div>
                  <div>Tecno-Market</div>
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
