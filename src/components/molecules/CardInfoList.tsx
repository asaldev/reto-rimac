
import { ReactNode } from 'react';
import styled from 'styled-components';

interface CardInfoListProps {
  children: ReactNode;
}
const CardInfoListStyled = styled.div`
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


const CardInfoList: React.FC<CardInfoListProps> = ({children}) => {
  return (
  <CardInfoListStyled>
{children}
  </CardInfoListStyled>
  );
}

export default CardInfoList;
