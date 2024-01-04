import React from 'react';
import { HeaderBasic } from '../../shared/components/HeaderBasic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faCircleUser,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Box, InputAdornment, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Settings = () => {
  const navigate = useNavigate();
  const { firstName, lastName, secondLastName, userName, email, phone } =
    useSelector((state: any) => state.user);

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <HeaderBasic />
      <div id="Container">
        <div id="registerFormContainer">
          <h3>Información de tu cuenta</h3>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
              <TextField
                label="Nombre de usuario"
                id="outlined-start-adornment Username"
                placeholder={userName}
                sx={{ m: 1, width: '60ch' }}
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faUser} size="xl" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Nombres"
                id="outlined-start-adornment FirstName"
                placeholder={firstName}
                sx={{ m: 1, width: '60ch' }}
                InputProps={{
                  readOnly: true,
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
                placeholder={lastName}
                sx={{ m: 1, width: '29ch' }}
                InputProps={{
                  readOnly: true,
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
                placeholder={secondLastName}
                sx={{ m: 1, width: '29ch' }}
                InputProps={{
                  readOnly: true,
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
                placeholder={phone ? phone : 'Sin definir'}
                sx={{ m: 1, width: '60ch' }}
                type="number"
                InputProps={{
                  readOnly: true,
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
                placeholder={email}
                sx={{ m: 1, width: '60ch' }}
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faAt} size="xl" />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </Box>
          <button
            type="button"
            className="btn btn-primary"
            onClick={goToHome}
            style={{
              width: '500px',
              height: '50px',
              marginBottom: '30px',
              marginTop: '10px',
            }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
};
