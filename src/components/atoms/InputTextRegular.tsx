import styled from "styled-components";
import React from 'react';
import { Typography } from '@mui/material';

interface HeadingTitlerProps {
  text: string;
}


const HeadingTitletStyled =  styled(Typography)`
    width: 100%;
    font-family: 'br_sonomabold', sans-serif;
    font-size: 32px;
    line-height: 34px;
    color: #03050F;
`;


const HeadingTitle: React.FC<HeadingTitlerProps> = ({text}) => {
  
  return (
    <HeadingTitletStyled
    >
      {text}
    </HeadingTitletStyled>
  );
};

export default HeadingTitle;