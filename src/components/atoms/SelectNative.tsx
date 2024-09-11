import { styled } from "styled-components";
import checkIcon from '../../assets/images/check.svg';
import { ReactNode } from "react";


interface SelectNativeProps {
  children: ReactNode;
}
/**/
const SelectNativeStyled =  styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-style: none;
    background: none;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    &.selectNative--mixed {
      width: 40%;
    }
    &.selectNative--mixed  select{
      border-radius: 8px 0px 0px 8px!important
    }

    select {
        width: 100%;
        height: 56px;
        font-size: 16px;
        line-height: 24px;
        padding: 20px 16px 8px;
        margin: 0px;
        border-radius: 8px;
        color: var(--gray1);
        font-family: var(--br-sonoma-regular);
        box-shadow: 0 0 0 1px inset var(--gray60);
        background-color: transparent;
        transition: all .2s ease;
        border-radius: 8px;
        box-sizing: border-box;
        border: 1px solid #5E6488;
    }



    &:has(select:focus)  label {
        top: 10px;
        left: 16px;
        font-size: 12px;
        z-index: 2;
    }

    label {
      top: 10px;
      left: 16px;
      font-size: 12px;
      width: 100%;
      display: flex;
      position: absolute;
      z-index: -1;
      transition: all 0.5s ease;
      color: #5E6488;
      pointer-events:none;
    }

`;

const SelectNative: React.FC<SelectNativeProps> = ({children}) => {
  
  return (
    <SelectNativeStyled>
           {children}
    </SelectNativeStyled>
  );
};

export default SelectNative;
