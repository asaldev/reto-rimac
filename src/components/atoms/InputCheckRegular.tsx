import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#03050F', 
          '&.Mui-checked': {
            color: '#03050F',
          },
          '& .MuiSvgIcon-root': {
            backgroundColor: '#03050F', 
            borderRadius: '4px',
          },
        },
      },
    },
  },
});

const InputCheckRegular = () => (
    <div>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Checkbox con fondo personalizado"
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Checkbox sin seleccionar"
      />
    </div>
);

export default InputCheckRegular;
