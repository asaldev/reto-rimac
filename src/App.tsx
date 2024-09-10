import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InsuranceListPage from './components/pages/InsuranceListPage';
import QuotationFormPage from './components/pages/QuotationFormPage';
import InsuranceSummaryPage from './components/pages/InsuranceSummaryPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-root': {
                        height: '56px',
                        border: '0px solid #000 !important', // Borde personalizado
                        borderRadius: '0px', // Radio del borde
                        padding: '0', // Eliminar padding
                        '& .MuiInputBase-input': {
                            padding: '0px', // Padding interno
                        },
                        '&:before': {
                            display: 'none',
                            border: 'none', // Eliminar línea subrayada antes del foco
                        },
                        '&:after': {
                            display: 'none',
                            border: 'none', // Eliminar línea subrayada después del foco
                        },
                        '&:hover::after': {
                            border: '0px', // Elimina el borde en el pseudo-elemento ::after en hover
                        },
                        '&:hover::before': {
                            border: '0px', // Elimina el borde en el pseudo-elemento ::after en hover
                        },
                        '&.Mui-focused': {
                            border: '0px solid #000'
                        },

                        '&.Mui-focused::after': {
                            border: '0px', // Elimina el borde en el pseudo-elemento ::after cuando está enfocado
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#000',
                        padding: '0', // Eliminar padding del label
                        margin: '0', // Eliminar margen del label
                        transform: 'translate(14px, 14px) scale(1)', // Posicionar el label
                        '&.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -6px) scale(0.75)', // Ajuste cuando el label está enfocado
                        },
                    },
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    '&.Mui-checked': {
                        color: '#03050F',
                        '& .MuiSvgIcon-root': {
                            backgroundColor: '#03050F', 
                        },
                    },
                    '& .MuiSvgIcon-root': {
                        color: '#FFFFFF',
                        backgroundColor: '#03050F', 
                        borderRadius: '4px', 
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    border: '0px solid #000', // Borde personalizado
                    borderRadius: '0px', // Radio del borde
                    padding: '0px', // Padding interno
                    '& .MuiSelect-icon': {
                        right: '0px', // Posición del icono de selección
                    },
                    '&:before': {
                        display: 'none',
                        border: 'none', // Eliminar línea subrayada antes del foco
                    },
                    '&:after': {
                        display: 'none',
                        border: 'none', // Eliminar línea subrayada después del foco
                    },
                    '&.Mui-focused': {
                        border: '0px solid #000'
                    },
                },
            },
        },
    },
});

function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<QuotationFormPage />} />
                    <Route path="/planes" element={<InsuranceListPage />} />
                    <Route path="/resumen" element={<InsuranceSummaryPage />} />
                </Routes>
            </Router>
    );
}

export default App;
