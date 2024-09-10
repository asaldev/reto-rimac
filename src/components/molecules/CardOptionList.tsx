
import { ReactNode } from 'react';
import styled from 'styled-components';

interface CardOptionListProps {
  children: ReactNode;
}
const CardOptionListStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 32px;
    @media (max-width: 768px) {
      flex-direction: column;    
      justify-content: center;   
      align-items: center;
    }
`;


const CardOptionList: React.FC<CardOptionListProps> = ({children}) => {
  return (
  <CardOptionListStyled>
{children}
  </CardOptionListStyled>
  );
}

export default CardOptionList;
