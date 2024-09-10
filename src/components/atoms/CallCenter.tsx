import styled from "styled-components";
import React from 'react';

interface CallCenterProps {
    text: string;
    phone: string;
    icon: string;
}

const CallCenterStyled = styled.div`
    width: auto;
    display: flex;
    align-items:center;
    gap: 8px;
`;

const CallCenterTextStyled = styled.div`
    width: auto;
    font-family: 'br_sonomaregular', sans-serif;
    font-size: 12px;
    line-height: 14px;
    color: #03050F;
     @media (max-width: 768px) {
        display: none;
     }
`;
const CallCenterPhoneStyled = styled.div`
    width: auto;
    font-family: 'br_sonomabold', sans-serif;
    font-size: 18px;
    line-height: 20px;
    color: #03050F;
`;
const CallCenterIconStyled = styled.div`
    width: auto;
`;


const CallCenter: React.FC<CallCenterProps> = ({ text, phone, icon }) => {
    return (
        <CallCenterStyled>
            <CallCenterTextStyled
            >
                {text}
            </CallCenterTextStyled>
            <CallCenterIconStyled
            >
                <img alt={text} src={icon} />
            </CallCenterIconStyled>
            <CallCenterPhoneStyled
            >
                {phone}
            </CallCenterPhoneStyled>
        </CallCenterStyled>
    );
};

export default CallCenter;