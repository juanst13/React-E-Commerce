import { useEffect, useState } from 'react';

import './styles.css';
import { HeaderBasic } from '../../../shared/components/HeaderBasic';
import { Box, InputAdornment, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faCircleUser,
  faEye,
  faEyeSlash,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../../../Credencials';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserStore } from '../../../redux/slices/userSlice';

const auth = getAuth(app);
const db = getFirestore(app);

const initialState = {
  firstName: '',
  lastName: '',
  secondLastName: '',
  userName: '',
  phone: 0,
};

const initialStateSession = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState(initialState);
  const [sessionData, setSessionData] = useState(initialStateSession);
  const [disabled, setDisabled] = useState(true);
  const [errorInfo, setErrorInfo] = useState({
    error: '',
    isError: false,
  });

  useEffect(() => {
    const validations = () => {
      const { firstName, lastName, phone } = userData;
      const { email, password, confirmPassword } = sessionData;
      let disable =
        firstName.trim().length === 0 ||
        lastName.trim().length === 0 ||
        phone.toString().trim().length === 0 ||
        email.trim().length === 0 ||
        password.trim().length === 0 ||
        confirmPassword.trim().length === 0 ||
        password !== confirmPassword ||
        password.trim().length < 6;
      setDisabled(disable);
    };
    validations();
  }, [userData, sessionData]);

  const redirectHome = () => {
    navigate('/');
  };

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onChangeUserData = (value: string, field: string) => {
    setUserData({ ...userData, [field]: value });
  };

  const onChangeSessionData = (value: string, field: string) => {
    setSessionData({ ...sessionData, [field]: value });
  };

  const addUser = async (e: any) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(
      auth,
      sessionData.email,
      sessionData.password
    )
      .then(async () => {
        await addDoc(collection(db, 'users'), {
          ...userData,
        });
        const { firstName, lastName, secondLastName, userName, phone } =
          userData;
        const { email } = sessionData;
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
        redirectHome();
        setUserData({ ...initialState });
        setSessionData({ ...initialStateSession });
      })
      .catch((error) => {
        console.error(error.code);
        setErrorInfo({ ...errorInfo, error: error.code, isError: true });
      });
  };

  return (
    <div id="container">
      <HeaderBasic />
      <div id="Container">
        <div id="registerFormContainer">
          <h3>Completa los datos para crear tu cuenta</h3>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
              <TextField
                label="Nombres"
                id="outlined-start-adornment FirstName"
                placeholder="Campo obligatorio"
                sx={{ m: 1, width: '60ch' }}
                onChange={({ target }) =>
                  onChangeUserData(target.value, 'firstName')
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faCircleUser} size="xl" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Primer apellido"
                id="outlined-start-adornment LastName"
                placeholder="Campo obligatorio"
                sx={{ m: 1, width: '29ch' }}
                onChange={({ target }) =>
                  onChangeUserData(target.value, 'lastName')
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faCircleUser} size="xl" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Segundo apellido"
                id="outlined-start-adornment SecondLastname"
                sx={{ m: 1, width: '29ch' }}
                onChange={({ target }) =>
                  onChangeUserData(target.value, 'secondLastName')
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faCircleUser} size="xl" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Teléfono celular"
                id="outlined-start-adornment Phone"
                placeholder="Campo obligatorio"
                sx={{ m: 1, width: '60ch' }}
                type="number"
                onChange={({ target }) => {
                  onChangeUserData(target.value, 'phone');
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faPhone} size="xl" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Correo electrónico"
                id="outlined-start-adornment Email"
                placeholder="Campo obligatorio"
                sx={{ m: 1, width: '60ch' }}
                onChange={({ target }) => {
                  onChangeSessionData(target.value, 'email');
                  const username = target.value.split('@');
                  onChangeUserData(username[0], 'userName');
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
                sx={{ m: 1, width: '29ch' }}
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
              <TextField
                label="Confirmar contraseña"
                id="outlined-start-adornment ConfirmPassword"
                sx={{ m: 1, width: '29ch' }}
                type={showPassword ? 'text' : 'password'}
                onChange={({ target }) =>
                  onChangeSessionData(target.value, 'confirmPassword')
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
          <button
            type="button"
            className="btn btn-primary"
            onClick={addUser}
            style={{
              width: '500px',
              height: '50px',
              marginBottom: '30px',
              marginTop: '10px',
            }}
            disabled={disabled}
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};
