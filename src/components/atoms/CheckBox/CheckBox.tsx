import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import createTypoStyle from "../../../style/TypoStyle";

export interface typeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const StyledInput = styled.input`
  outline: none;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid var(--wb-300);
  /* appearance: none; */
  &:checked {
    background-color: var(--vio-300);
    border: none;
  }
  &:disabled {
    background-color: var(--wb-400);
    border: 1px solid var(--wb-600);
  }
`;

const FlexBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const CSSTypo = createTypoStyle("typo-body-14");

const Label = styled.label<{ $disabled: boolean }>`
  color: ${({ $disabled }) => ($disabled ? "var(--wb-600)" : "var(--wb-900)")};
  ${CSSTypo}
`;

export default function CheckBox({ label, ...props }: typeInputProps) {
  return (
    <FlexBox>
      <StyledInput type="checkbox" {...props} />
      <Label $disabled={props.disabled || false}>{label}</Label>
    </FlexBox>
  );
}
