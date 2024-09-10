import React from 'react';
import logo2 from './../../assets/logo2.svg';
import Copyright from '../atoms/Copyright';
import styled from 'styled-components';


const FooterStyled = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 64px;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 24px !important;
      min-height: 152px;

     }
`
const FigureStyled = styled.figure`
    display: flex;
    align-items: center;
    padding: 8px;
    

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 24px !important;
      min-height: 152px;

     }
`
const FooterSite: React.FC = () => {
  return (
      <FooterStyled>
        <FigureStyled>
          <img src={logo2} alt="Rimac Logo" style={{ height: 40 }} />
        </FigureStyled>
        

        <Copyright text="© 2024 RIMAC Seguros y Reaseguros."/>
      </FooterStyled>
  );
};

export default FooterSite;
