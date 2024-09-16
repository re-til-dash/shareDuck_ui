import { ChangeEventHandler, InputHTMLAttributes, useState } from "react";
import { styled } from "styled-components";
import createTypoStyle from "../../../style/TypoStyle";

export interface typeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const StyledCheckBox = styled.span`
  display: block;
  outline: none;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid var(--wb-300);
 
`;

const CSSTypo = createTypoStyle("typo-body-14");

const Label = styled.label<{ $disabled: boolean }>`
  display: flex;
  cursor: pointer;

  color: ${({ $disabled }) => ($disabled ? "var(--wb-600)" : "var(--wb-900)")};
  ${CSSTypo}

  & > span{
    margin-right: 12px;
  }
   /* appearance: none; */
  & > input:checked ~ span   {
    background-color: var(--vio-300);
    border: none;

     &::after{
      content: url("../../../../public/icons/check.svg"
);
      display: block;
      width: 100%;
      height: 100%;
      transform: translateX(5px);
     }
  }
  & > input:disabled ~ span  {
    background-color: var(--wb-400);
    border: 1px solid var(--wb-600);
  }
`;

export default function CheckBox({ label, checked, ...props }: typeInputProps) {
  const [value, setValue] = useState(checked)

  const handleChangeCheck:ChangeEventHandler = ()=>{
    setValue(!value)
  }

  return (
      <Label $disabled={props.disabled || false} >
        <input className="a11y-hidden" type="checkbox" {...props}  value={`${value}`} checked={value} onChange={handleChangeCheck}/>
        <StyledCheckBox></StyledCheckBox>
        {label}
      </Label>
  );
}
