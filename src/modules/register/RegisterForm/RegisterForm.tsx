import { useState } from 'react';

import './styles.css';
import { HeaderBasic } from '../../../shared/components/HeaderBasic';
import {
  Box,
  FilledInput,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faCircleUser,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

export const RegisterForm = () => {
  const [units, setUnits] = useState<string>('1 unidad');
  const [unit, setUnit] = useState<string>('1 unidad');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickSetunits = () => setUnits(unit);

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div id="container">
      <HeaderBasic />
      <div id="Container">
        <div id="registerContainer">
          <h3>Completa los datos para crear tu cuenta</h3>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
              <TextField
                label="Nombres"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '60ch' }}
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
                id="outlined-start-adornment"
                sx={{ m: 1, width: '29ch' }}
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
                id="outlined-start-adornment"
                sx={{ m: 1, width: '29ch' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faCircleUser} size="xl" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Correo electrónico"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '60ch' }}
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
                id="outlined-start-adornment"
                sx={{ m: 1, width: '29ch' }}
                type={showPassword ? 'text' : 'password'}
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
                id="outlined-start-adornment"
                sx={{ m: 1, width: '29ch' }}
                type={showPassword ? 'text' : 'password'}
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
            </div>
          </Box>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClickSetunits}
            style={{ height: '50px', marginTop: '30px', marginBottom: '30px' }}
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};
