import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShop,
  faCartShopping,
  faMicrochip,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../Credencials';
import { addUserStore } from '../../redux/slices/userSlice';

const auth = getAuth(app);

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { firstName, lastName } = useSelector((state: any) => state.user);

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(
          addUserStore({
            firstName: '',
            lastName: '',
            secondLastName: '',
            userName: '',
            phone: '',
            email: '',
          })
        );
        alert('Cerrando sesión.');
      })
      .catch(console.log);
  };

  const goToSettings = () => {
    navigate('/settings');
  };

  return (
    <header id="header-container">
      <div>
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
              <form className="d-flex" role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Buscar productos..."
                  aria-label="Search"
                  id="inputSearch"
                />
              </form>
              {/* <p id="message">Ingresa para disfrutar de nuestras ofertas!</p> */}
              <ul>
                {firstName ? (
                  <>
                    <li>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-dark dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          id="dropdownMenuClickableInside"
                          data-bs-auto-close="outside"
                        >
                          <FontAwesomeIcon
                            icon={faCircleUser}
                            size="xl"
                            style={{ marginRight: '10px' }}
                          />
                          <strong>
                            {firstName} {lastName}
                          </strong>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuClickableInside"
                        >
                          <li className="dropdown-item" onClick={goToSettings}>
                            Configuración
                          </li>
                          <li className="dropdown-item" onClick={() => {}}>
                            Seguridad
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li className="dropdown-item" onClick={logout}>
                            Cerrar sesión
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="#" id="link">
                        Mis compras
                      </Link>
                    </li>
                    <li>
                      <Link to="#" id="link">
                        <FontAwesomeIcon icon={faCartShopping} id="cartIcon" />
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </ul>
            </div>
            <div>
              {/* <p id="message">Mejores productos</p>
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
              </ul> */}
              {/* <ul>
                {firstName ? (
                  <div id="userInfo">
                    <li>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-dark dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          id="dropdownMenuClickableInside"
                          data-bs-auto-close="outside"
                        >
                          <FontAwesomeIcon
                            icon={faCircleUser}
                            size="xl"
                            style={{ marginRight: '10px' }}
                          />
                          <strong>
                            {firstName} {lastName}
                          </strong>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuClickableInside"
                        >
                          <li className="dropdown-item" onClick={() => {}}>
                            Configuración
                          </li>
                          <li className="dropdown-item" onClick={() => {}}>
                            Seguridad
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li className="dropdown-item" onClick={logout}>
                            Cerrar sesión
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="#" id="link">
                        Mis compras
                      </Link>
                    </li>
                    <li>
                      <Link to="#" id="link">
                        <FontAwesomeIcon icon={faCartShopping} id="cartIcon" />
                      </Link>
                    </li>
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </ul> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
