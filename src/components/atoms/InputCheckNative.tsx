import { styled } from "styled-components";
import checkIcon from '../../assets/images/check.svg';
import { ReactNode } from "react";


interface InputCheckNativeProps {
  children: ReactNode;
}

const InputCheckNativeStyled =  styled.div`
position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

input {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid #0A051E;
  border-radius: 4px;
  vertical-align: sub;
  top: 50%;
  left: 1rem;
  outline: none;
  display: flex;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}
input:checked {
  background-color: #0A051E;
  border-color: #0A051E;
}

input:checked:focus, input:checked:hover {
  border-color: #0A051E;
}
input:after {
  content: "";
  width: 100%;
  height: 100%;
  background-image: url(${checkIcon});
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: center center;
}


label {
  font-size: 12px;
  width: 100%;
  display: flex;
  color: #0A051E;
}

`;

const InputCheckNative: React.FC<InputCheckNativeProps> = ({children}) => {
  
  return (
    <InputCheckNativeStyled>
           {children}
    </InputCheckNativeStyled>
  );
};

export default InputCheckNative;
