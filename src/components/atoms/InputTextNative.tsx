import { styled } from "styled-components";
import checkIcon from '../../assets/images/check.svg';
import { ReactNode } from "react";


interface InputTextNativeProps {
  children: ReactNode;
}
/**/
const InputTextNativeStyled =  styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-style: none;
    background: none;
    outline: none;
    appearance: none;
    -webkit-appearance: none;


    input {
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



    &:has(input:focus)  label {
        top: 10px;
        left: 16px;
        font-size: 12px;
        z-index: 2;
    }

    label {
      width: 100%;
      display: flex;
      position: absolute;
      top: 10px;
      left: 16px;
      font-size: 12px;
      z-index: 2;
      transition: all 0.5s ease;
      color: #5E6488;
      pointer-events:none;
    }

`;

const InputTextNative: React.FC<InputTextNativeProps> = ({children}) => {
  
  return (
    <InputTextNativeStyled>
           {children}
    </InputTextNativeStyled>
  );
};

export default InputTextNative;
