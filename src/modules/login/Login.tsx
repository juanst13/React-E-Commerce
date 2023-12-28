import { faAt, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, InputAdornment, TextField } from '@mui/material';
import { HeaderBasic } from '../../shared/components/HeaderBasic';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../Credencials';
import { useDispatch } from 'react-redux';
import { addUserStore } from '../../redux/slices/userSlice';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

const initialStateSession = {
  email: '',
  password: '',
};

const auth = getAuth(app);
const db = getFirestore(app);

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [sessionData, setSessionData] = useState(initialStateSession);
  const [errorInfo, setErrorInfo] = useState({
    error: '',
    isError: false,
  });

  const goToHome = () => {
    navigate('/');
  };

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onChangeSessionData = (value: string, field: string) => {
    setSessionData({ ...sessionData, [field]: value });
  };

  const login = async () => {
    const { email, password } = sessionData;
    await signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        const username = email.split('@');
        const q = query(
          collection(db, 'users'),
          where('userName', '==', username[0])
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          const { firstName, lastName, secondLastName, userName, phone } =
            doc.data();
          dispatch(
            addUserStore({
              firstName,
              lastName,
              secondLastName,
              userName,
              phone,
              email,
            })
          );
        });
        goToHome();
        setSessionData({ ...initialStateSession });
      })
      .catch((error) => {
        console.error(error.code);
        setErrorInfo({ ...errorInfo, error: error.code, isError: true });
      });
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div id="container">
      <HeaderBasic />
      <div id="Container">
        <div id="loginContainer">
          <h3>
            Ingresa tu e-mail de <br />
            Tecno-Market
          </h3>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
              <TextField
                label="Correo electrónico"
                id="outlined-start-adornment Email"
                sx={{ m: 1, width: '40ch' }}
                onChange={({ target }) => {
                  onChangeSessionData(target.value, 'email');
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faAt} size="xl" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Contraseña"
                id="outlined-start-adornment Password"
                sx={{ m: 1, width: '40ch' }}
                type={showPassword ? 'text' : 'password'}
                onChange={({ target }) =>
                  onChangeSessionData(target.value, 'password')
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        size="xl"
                        onClick={handlerShowPassword}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              {errorInfo.isError && <p id="textError">{errorInfo.error}</p>}
            </div>
          </Box>
          <div id="buttonContainer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={login}
              style={{ height: '50px', marginRight: '10px' }}
            >
              Iniciar sesión
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={goToRegister}
              style={{ height: '50px', color: '#3885fa' }}
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
