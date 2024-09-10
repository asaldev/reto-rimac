import styled from "styled-components";
import React from 'react';

interface FeaturedTagProps {
  text: string;
  gradtop?: string;
  gradbottom?: string;
}

const FeaturedTagStyled =  styled.div<FeaturedTagProps>`
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-family: 'br_sonomabold';
    font-size: 14px;
    line-height: 16px;
    letter-spacing: .4px;
    background: ${({ gradtop, gradbottom }) => 
    gradtop && gradbottom 
      ? `linear-gradient(90deg, ${gradtop} 0%, ${gradbottom} 100%)`
      : 'linear-gradient(90deg, #00F4E2 0%, #00FF7F 100%)'};

    color: #03050F;
    @media (max-width: 768px) {
        font-size: 12px
     }
`;


const FeaturedTag: React.FC<FeaturedTagProps> = ({ text, gradtop, gradbottom}) => {
  return (
    <FeaturedTagStyled
      gradtop={gradtop}
      gradbottom={gradbottom}
      text={text}
    >
      {text}
    </FeaturedTagStyled>
  );
};

export default FeaturedTag;