import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Layout from '../templates/Layout';
import CardOptionItem from '../atoms/CardOptionItem';
import CardInfoItem from '../atoms/CardInfoItem';
import HeadingTitle from '../atoms/HeadingTitle';
import InsuranceType1 from '../../assets/images/IcAddUserLight.svg';
import styled from 'styled-components';
import CardOptionList from '../molecules/CardOptionList';
import CardInfoList from '../molecules/CardInfoList';
import { useDispatch } from 'react-redux';
import { setFormData2, setRemoteDataUser, setRemoteDataPlans } from '../../redux/formSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const StructureLayoutAStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

interface RemoteDataPlans {
      name: string;
      price: number,
      description: Array<string>,
      age: number
}


const InsuranceListPage: React.FC = () => {
  const [currentData2, setCurrentData2] = useState({  planselected: '', priceselected: 0 });
  const [plans, setPlans] = useState<RemoteDataPlans[]>([]);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
   useEffect(() => {
    fetch('https://rimac-front-end-challenge.netlify.app/api/user.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setRemoteDataUser(data));
        console.log(data);
      });
  }, [dispatch]);

   useEffect(() => {
    fetch('https://rimac-front-end-challenge.netlify.app/api/plans.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setRemoteDataPlans(data.list));
        console.log(data);
        setPlans(data.list); 
      });
  }, [dispatch]);


   const handleSubmit = (price: number, name: string) => {
   const updatedData = { planselected: name, priceselected: price };
  
 // setCurrentData2(updatedData);
  
  dispatch(setFormData2(updatedData));
  navigate('/resumen');
  }; 
  return (
    <Layout footer={false}>

      <StructureLayoutAStyled>

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
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Rocío ¿Para quién deseas cotizar?
        </Typography>
        <HeadingTitle text="Selecciona la opción que se ajuste más a tus necesidades." />

        <CardOptionList>
          <CardOptionItem icon={InsuranceType1} title='Para mi' subtitle='Cotiza tu seguro de salud y agrega familiares si así lo deseas.' />
          <CardOptionItem isSelected={false} icon={InsuranceType1} title='Para alguien más' subtitle='Realiza una cotización para uno de tus familiares o cualquier persona.' />
        </CardOptionList>

        <CardInfoList>
     
            {plans && plans.map((plan, index) => (
          <CardInfoItem
            key={index}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            onClick={()=>handleSubmit(plan.price, plan.name)}
          />
        ))}
        </CardInfoList>
      </StructureLayoutAStyled>
    </Layout>
  );
};

export default InsuranceListPage;
