import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PersonIcon from '@mui/icons-material/Person';
import Layout from '../templates/Layout';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

const StructureLayoutAStyled = styled.div`
    display: flex;
    flex-direction: column;
`;


const InsuranceSummaryPage: React.FC = () => {
  const formData1 = useSelector((state: RootState) => state.form.formData1);
  const formData2 = useSelector((state: RootState) => state.form.formData2);
  const remoteDataUser = useSelector((state: RootState) => state.form.remoteDataUser);
  console.log(remoteDataUser);
  const navigate = useNavigate();
  return (
    <Layout>
       <Box sx={{ padding: 4, backgroundColor: '#f9faff', minHeight: '100vh' }}>



      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Typography variant="body2" color="primary">
          1
        </Typography>
        <Typography variant="body2" color="primary" sx={{ mx: 1 }}>
          Planes y coberturas
        </Typography>
        <Typography variant="body2" color="text.disabled" sx={{ mx: 1 }}>
          -----
        </Typography>
        <Typography variant="body2" color="primary" sx={{ mx: 1 }}>
          2
        </Typography>
        <Typography variant="body2" color="primary">
          Resumen
        </Typography>
      </Box>


      <Button startIcon={<ArrowBackIosIcon />} onClick={() => navigate(-1)} sx={{ color: '#4a90e2', mb: 2 }}>
        Volver
      </Button>


      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Resumen del seguro
      </Typography>


      <Card sx={{ maxWidth: 600, margin: '0 auto', borderRadius: 2, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            PRECIOS CALCULADOS PARA:
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <PersonIcon sx={{ color: '#000', fontSize: 28, mr: 1 }} />
            <Typography variant="h6" fontWeight="bold">
              {remoteDataUser.name} {remoteDataUser.lastName} 
            </Typography>
          </Box>
          <Typography variant="body1" gutterBottom>
            <strong>Responsable de pago</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {formData1.typedoc}: {formData1.numdoc}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Celular: {formData1.celular}
          </Typography>
          <Box sx={{ my: 2 }}>
            <Typography variant="body1" gutterBottom>
              <strong>Plan elegido</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {formData2.planselected}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Costo del Plan: ${formData2.priceselected} al mes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>   
    </Layout>

  );
};

export default InsuranceSummaryPage;
