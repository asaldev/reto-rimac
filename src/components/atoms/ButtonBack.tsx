import styled from "styled-components";
import React from 'react';

interface ButtonBackProps {
    text: string;
    phone: string;
    icon: string;
}

const ButtonBackStyled = styled.div`
    width: auto;
    font-family: 'br_sonomabold', sans-serif;
    font-size: 18px;
    line-height: 20px;
    color: #03050F;
`;

const CallCenter: React.FC<ButtonBackProps> = ({ text='Volver', phone, icon }) => {
    return (
        <ButtonBackStyled>
                
        </ButtonBackStyled>
    );
};

export default CallCenter;