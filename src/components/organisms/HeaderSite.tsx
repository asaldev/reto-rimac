import React from 'react';
import logo from './../../assets/images/logo.svg';
import icon from './../../assets/images/phone.svg';
import styled from 'styled-components';
import CallCenter from '../atoms/CallCenter';

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 64px;
    width: 100%;
`
const HeaderSite: React.FC = () => {
  return (
    <HeaderStyled>
      <img src={logo} alt="Rimac Logo" style={{ height: 40 }} />
      <CallCenter text='¡Compra por este medio!' phone='(01) 411 6001' icon={icon}></CallCenter>
    </HeaderStyled>
  );
};

export default HeaderSite;
