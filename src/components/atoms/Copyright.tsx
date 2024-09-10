import styled from "styled-components";
import React from 'react';

interface CopyrightrProps {
  text: string;
}


const CopyrighttStyled =  styled.div<CopyrightrProps>`
    width: auto;
    font-family: var(--br-sonoma-bold), sans-serif;
    font-size: 14px;
    line-height: 18px;
    color: #F8F9FF;
      @media (max-width: 768px) {
        font-size: 12px;
        padding: 8px;
        border-top: 1px solid #2B304E;
    } 
`;


const Copyright: React.FC<CopyrightrProps> = ({ text}) => {
  return (
    <CopyrighttStyled
      text={text}
    >
      {text}
    </CopyrighttStyled>
  );
};

export default Copyright;