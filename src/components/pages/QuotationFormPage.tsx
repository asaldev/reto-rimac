import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, MenuItem, Checkbox, Button, FormControlLabel, Select, InputLabel, FormControl, Typography, Box, NativeSelect, Input } from '@mui/material';
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
import InputCheckRegular from '../atoms/InputCheckRegular';
import InputCheckNative from '../atoms/InputCheckNative';
import InputTextNative from '../atoms/InputTextNative';
import SelectNative from '../atoms/SelectNative';
import ButtonNative from '../atoms/ButtonNative';

const FormStyled = styled.form`
    display: flex;
    gap: 24px;
    flex-direction: column;
    span{
        font-size: 12px;
        color: #ff1c44;
        padding: 10px 0px;
        display: flex;
    }
`;


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
    margin-bottom: -100px !important;
    max-width: 352px;

    @media (max-width: 767px) {
      grid-column: 1;
    }
`;
const ItemCStyled = styled.div`
    grid-column: 2;
    grid-row: 2;
    max-width: 352px;
    padding-top: -200px !important;

    @media (max-width: 767px) {
      grid-column: 1 / span 2;
    }
`;

const MixedComponentStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    & > div:first-child{
       width: 40%;
    }

    & > div:last-child{
      width: 60%;
    }

    select{
      border-radius: 8px 0px 0px 8px!important;
      border-right: 0px !important;
    }

    input{
      border-radius: 0 8px 8px 0 !important;
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
  const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });




  const onSubmit = (data: any) => {
    console.log('Datos del formulario:', data);
    navigate('/planes');


    setCurrentData({ ...currentData, typedoc: data.tipoDocumento, numdoc: data.numdoc, celular: data.celular });
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
        <ItemCStyled>



          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <div>
              <FeaturedTag text="Seguro Salud Flexible" />
              <HeadingTitle text="Creado para ti y tu familia" />
              <Typography variant="body1" gutterBottom>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
              </Typography>
            </div>
            <div>
              <MixedComponentStyled className='inputTextNative--mixed  selectNative--mixed'>
                <SelectNative>
                  <select {...register('tipoDocumento')}>
                    <option value="dni">DNI</option>
                    <option value="ruc">RUC</option>
                  </select>
                </SelectNative>

                <InputTextNative>
                  <label htmlFor='numeroDocumento'>Nro de Documento</label>
                  <input  {...register('numeroDocumento')} onChange={async (e: any) => {
                    const value = e.target.value;
                    setValue('numeroDocumento', value);
                    await trigger('numeroDocumento');
                    setCurrentData({ ...currentData, numdoc: e.target.value });
                  }} />

                </InputTextNative>
              </MixedComponentStyled>
              {errors.numeroDocumento && <span>{errors.numeroDocumento.message}</span>}
              <InputTextNative>
                <label htmlFor='numeroCelular'>Celular</label>
                <input {...register('numeroCelular')} onChange={async (e: any) => {
                  const value = e.target.value;
                  setValue('numeroCelular', value);
                  await trigger('numeroCelular');
                  setCurrentData({ ...currentData, celular: e.target.value });
                }} />
                {errors.numeroCelular && <span>{errors.numeroCelular.message}</span>}
              </InputTextNative>
            </div>
            <div>
              <InputCheckNative>
                <input type="checkbox" {...register('checkbox1')} />
                <label htmlFor='checkbox1'>Acepto la politica de privacidad</label>
              </InputCheckNative>
              {errors.checkbox1 && <span>{errors.checkbox1.message}</span>}
              <InputCheckNative>
                <input type="checkbox" {...register('checkbox2')} />
                <label htmlFor='checkbox2'>Acepto la politica de comunicaciones comerciales</label>
              </InputCheckNative>
              <a href="./">Aplican terminos y condiciones</a>
              {errors.checkbox2 && <span>{errors.checkbox2.message}</span>}
            </div>
            <div><ButtonNative type="submit" value='Cotiza aquí' /></div>
          </FormStyled>





        </ItemCStyled>
      </StructureLayoutStyled>
    </Layout>
  );
};

export default QuotationFormPage;