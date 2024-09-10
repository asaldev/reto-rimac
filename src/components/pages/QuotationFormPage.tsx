import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, MenuItem, Checkbox, Button, FormControlLabel, Select, InputLabel, FormControl, Typography, Box, NativeSelect } from '@mui/material';
import styled from "styled-components";
import Grid from '@mui/material/Grid2';
import Layout from '../templates/Layout';
import coverimage from '../../assets/cover.png';
import ButtonRegular from '../atoms/ButtonRegular';
import FeaturedTag from '../atoms/FeaturedTag';
import HeadingTitle from '../atoms/HeadingTitle';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SelectRegular from '../atoms/SelectRegular';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFormData1 } from '../../redux/formSlice';
import { AppDispatch } from '../../redux/store';

const StructureLayoutStyled = styled.div`
    display: grid;
    column-gap: 128px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    @media (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      column-gap: 12px;
    }
`;

const ItemAStyled = styled.div`
    grid-row: span 2;
    @media (max-width: 767px) {
      grid-row: span 1;
      grid-column: 2;
    }
`;
const ItemBStyled = styled.div`
    grid-column: 2;
    grid-row: 1;

    @media (max-width: 767px) {
      grid-column: 1;
    }
`;
const ItemCStyled = styled.div`
    grid-column: 2;
    grid-row: 2;
    @media (max-width: 767px) {
      grid-column: 1 / span 2;
    }
`;




const schema = yup.object().shape({
  tipoDocumento: yup.string().required('Este campo es obligatorio'),
  numeroDocumento: yup
    .string()
    .when('tipoDocumento', {
      is: "dni",
      then: () => yup.string().length(8, 'El número de DNI debe tener 8 dígitos').required('Este campo es obligatorio'),
      otherwise: () => yup.string().length(11, 'El número de RUC debe tener 11 dígitos').required('Este campo es obligatorio'),
    }),
  numeroCelular: yup
    .string()
    .matches(/^[0-9]{9}$/, 'El número de celular debe tener 9 dígitos')
    .required('El número de celular es obligatorio'),
  checkbox1: yup.boolean().oneOf([true], 'Este campo es obligatorio'),
  checkbox2: yup.boolean().oneOf([true], 'Este campo es obligatorio'),
});


const QuotationFormPage: React.FC = () => {
  const [currentData, setCurrentData] = useState({ numdoc: '', typedoc: 'dni', celular: '' });
  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log('Datos del formulario:', data);
    navigate('/planes');


    setCurrentData({ ...currentData, typedoc: data.tipoDocumento });
    console.log(currentData);
    dispatch(setFormData1(currentData));
  };

  return (
    <Layout activeGradient={true}>
      <StructureLayoutStyled>
        <ItemAStyled>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
            }}
            src={coverimage}
            alt="Familia feliz"
          />
        </ItemAStyled>
        <ItemBStyled>
          <FeaturedTag text="Seguro Salud Flexible" />
          <HeadingTitle text="Creado para ti y tu familia" />
        </ItemBStyled>
        <ItemCStyled>
          <Typography variant="body1" gutterBottom>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
          </Typography>


          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="tipoDocumento"
              control={control}
              defaultValue="dni"
              render={({ field }) => (
                <FormControl fullWidth margin="normal">
                  <InputLabel id="tipoDocumento-label">Tipo de Documento</InputLabel>
                  <select
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setCurrentData({ ...currentData, typedoc: e.target.value });
                    }}
                  >
                    <option value="dni">DNI</option>
                    <option value="ruc">RUC</option>

                  </select>
                </FormControl>
              )}
            />

            <Controller
              name="numeroDocumento"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Número de Documento"
                  error={!!errors.numeroDocumento}
                  helperText={errors.numeroDocumento?.message}
                  fullWidth
                  margin="normal"

                  onChange={(e) => {
                    field.onChange(e);
                    setCurrentData({ ...currentData, numdoc: e.target.value });
                  }}
                />
              )}
            />

            <Controller
              name="numeroCelular"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Número de Celular"
                  error={!!errors.numeroCelular}
                  helperText={errors.numeroCelular?.message}
                  fullWidth
                  margin="normal"
                  onChange={(e) => {
                    field.onChange(e);
                    setCurrentData({ ...currentData, celular: e.target.value });
                  }}
                />
              )}
            />

            <Controller
              name="checkbox1"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={field.value} />}
                  label="Checkbox 1 (Obligatorio)"
                />
              )}
            />
            {errors.checkbox1 && <p style={{ color: 'red' }}>{errors.checkbox1.message}</p>}

            <Controller
              name="checkbox2"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={field.value} />}
                  label="Checkbox 2 (Obligatorio)"
                />
              )}
            />
            {errors.checkbox2 && <p style={{ color: 'red' }}>{errors.checkbox2.message}</p>}

            <Box mt={2}>
              <ButtonRegular type="submit">
                cotiza aqui
              </ButtonRegular>
            </Box>
          </form>





        </ItemCStyled>
      </StructureLayoutStyled>
    </Layout>
  );
};

export default QuotationFormPage;