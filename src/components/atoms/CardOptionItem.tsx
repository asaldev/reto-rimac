import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import ButtonRegular from './ButtonRegular';
import React, { useState } from 'react';
import styled from 'styled-components';

interface HeadingTitlerProps {
  title: string;
  subtitle: string;
  icon: string;
  onSelect?: any;
  isSelected?: boolean;
}


const CardItem = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid #cccccc;
  border-radius: 24px !important;
  padding: 40px 24px;
  cursor: pointer;
  max-width: 256px;
  width: 100%;
  box-sizing: border-box;
  justify-content: start;
  gap: 8px;

  &.selected {
    background-color: #ffffff;
    border-color: #646262;
    color: #646262;
  }

  @media (max-width: 768px) {
      max-width: 100%;
  }
`;


const TitleStyled = styled.div`
  margin-top: 5px;
  display: flex;
  text-wrap: wrap;
    font-family: 'br_sonomabold', sans-serif;
    font-size: 20px;
    line-height: 22px;
`;
const SubtitleStyled = styled.div`
  margin-top: 5px;
  display: flex;
  text-wrap: wrap;
    font-family: 'br_sonomaregular', sans-serif;
    font-size: 12px;
    line-height: 14px;
`;


const CheckIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: none;
  color: #000;
  width: 16px;
  height: 16px;

  &.visible {
    display: block;
  }

  svg {
    background-color: #fff;
    border-radius: 50%;
    overflow: hidden;
  }
`;
const OptionIcon = styled.div`
  max-with: 48px;
  width: 100%;

`;

const CardOptionItem: React.FC<HeadingTitlerProps> = ({isSelected = true, onSelect, title, subtitle, icon}) => {
  return (
  <CardItem className={isSelected ? 'selected' : ''} onClick={onSelect}>
    <input type="radio" name="radioGroup1" style={{ display: 'none' }} />
    <OptionIcon><img src={icon} alt={title}/></OptionIcon> 
    <TitleStyled>{title}</TitleStyled>
    <SubtitleStyled>{subtitle}</SubtitleStyled>
    
    <CheckIcon className={isSelected ? 'visible' : ''}>
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
          fill="#389E0D"
        />
      </svg>
    </CheckIcon>
  </CardItem>
  );
}

export default CardOptionItem;
