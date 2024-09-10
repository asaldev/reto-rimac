import React from 'react';
import { TextField, styled } from '@mui/material';

// Crear estilos personalizados con makeStyles
const useStyles = styled(TextField)({
  inputField: {
    '& .MuiInputBase-root': {
      border: 'none',
    },
    '& .MuiInput-underline:before, & .MuiInput-underline:after': {
      borderBottom: 'none', 
    },
    '& .MuiInputBase-input': {
      padding: '8px 12px', 
      backgroundColor: '#f1f1f1',
      borderRadius: '8px', 
    },
    '& .MuiInputLabel-root': {
      top: '0', 
      left: '12px',
      transform: 'translate(0, 14px) scale(1)',
      color: '#999', 
    },
    '& .MuiInputLabel-shrink': {
      display: 'none', 
    },
  },
});

const CustomTextField: React.FC = () => {
  return (
    <TextField
      label="Your Label"
      placeholder="Your Label"
      fullWidth
      variant="standard"
      InputProps={{
        disableUnderline: true, // Deshabilitar el subrayado
      }}
      sx={{
        '& .MuiInputBase-root': {
          border: 'none', // Eliminar borde
        },
        '& .MuiInput-underline:before, & .MuiInput-underline:after': {
          borderBottom: 'none', // Eliminar línea inferior
        },
        '& .MuiInputBase-input': {
          padding: '8px 12px', // Espaciado interno personalizado
          backgroundColor: '#f1f1f1', // Color de fondo
          borderRadius: '8px', // Bordes redondeados
        },
        '& .MuiInputLabel-root': {
          top: '0', // Colocar el label dentro del input
          left: '12px',
          transform: 'translate(0, 14px) scale(1)',
          color: '#999', // Color personalizado del label
        },
        '& .MuiInputLabel-shrink': {
          display: 'none', // Evitar que el label se eleve
        },
      }}
    />
  );
};
export default CustomTextField;