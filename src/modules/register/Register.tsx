import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { HeaderBasic } from '../../shared/components/HeaderBasic';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  const redirectToRegisterForm = () => {
    navigate('/registerForm');
  };

  return (
    <div id="container">
      <HeaderBasic />
      <div id="Container">
        <div id="registerContainer">
          <FontAwesomeIcon icon={faClipboardList} size="8x" />
          <h4>Para crear tu cuenta te pediremos algunos datos</h4>
          <p>Solo te tomará unos minutos.</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={redirectToRegisterForm}
            style={{ height: '50px' }}
          >
            Crear cuenta personal
          </button>
          <button
            type="button"
            className="btn btn-primary"
            // onClick={handleClickSetunits}
            style={{
              marginTop: '15px',
              height: '50px',
              backgroundColor: '#e3edfb',
              borderColor: '#e3edfb',
              color: '#3885fa',
            }}
          >
            Crear cuenta empresarial
          </button>
        </div>
      </div>
    </div>
  );
};
