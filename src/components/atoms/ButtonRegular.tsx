import React from 'react';
import { Button, ButtonProps, TextField } from '@mui/material';
import styled from 'styled-components';

interface ButtonRegularProps extends ButtonProps {
  text?: string;
  bkgbutton?: string;
  colorbutton?: string;
  size?: 'small' | 'medium' | 'large';
  hovercolor?: string;
}

const ButtonStyled = styled(Button)<ButtonRegularProps>`
  cursor: pointer !important;
  position: relative;
  width: fit-content !important;
  font-family: 'br_sonomabold';
  font-size: ${(props) =>
    props.size === 'small'
      ? '12px'
      : props.size === 'medium'
      ? '16px'
      : '20px'} !important;
  line-height: 24px;
  text-transform: none !important;
  border-radius: 40px !important;
  text-align: center !important;
  white-space: nowrap !important;
  letter-spacing: .4px !important;
  overflow: hidden;
  border-width: 2px !important;
  border-color: var(--gray1) !important;
  border-style: solid !important;
  background-color: ${(props) => props.bkgbutton || '#03050F'} !important;
  color: ${(props) => props.colorbutton || '#fff'} !important;
  padding: ${(props) =>
    props.size === 'small'
      ? '6px 12px'
      : props.size === 'medium'
      ? '8px 16px'
      : '20px 40px'} !important;
  height: ${(props) =>
    props.size === 'small'
      ? '32px'
      : props.size === 'medium'
      ? '40px'
      : '64px'} !important;
  
  &:hover {
    background-color: ${(props) => props.hovercolor || props.bkgbutton || '#0056b3'} !important;
  }

  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const ButtonRegular: React.FC<ButtonRegularProps> = ({
  text,
  bkgbutton = '#03050F',
  colorbutton = '#fff',
  size = 'large',
  hovercolor = '#6c757d',
  component = 'button',
  ...props
}) => {
  const {children} =  props;
  return (
    <ButtonStyled
      bkgbutton={bkgbutton}
      colorbutton={colorbutton}
      size={size}
      hovercolor={hovercolor}
      component={component}
      disableElevation
      variant="contained"
      text={text}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

export default ButtonRegular;
