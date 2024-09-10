import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import ButtonRegular from './ButtonRegular';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface CardInfoItemProps{
      onClick: any;
      name: string;
      price: number;
      description: Array<string>
}

const CardInfoItemStyled = styled(Card)`
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
`;


const CardInfoItem: React.FC<CardInfoItemProps> = ({ onClick, name, price, description }) => {  


  return (
    <CardInfoItemStyled variant="outlined">
      <Typography variant="h6" fontWeight="bold">
       {name}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        ${price} al mes
      </Typography>
  {description.map((item: any, index: number) => (
        <Typography key={index} variant="body2">
          • {item}
        </Typography>
      ))}
      <ButtonRegular onClick={onClick} bkgbutton='#FF1C44' hovercolor='#FF4465' variant="contained" size="medium" sx={{ marginTop: 2 }} text={''}>
        Seleccionar Plan
      </ButtonRegular>
    </CardInfoItemStyled>
  );
}

export default CardInfoItem;
