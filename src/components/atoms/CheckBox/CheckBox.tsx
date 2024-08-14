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
`;

const FlexBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const CSSTypo = createTypoStyle("typo-body-14");

const Label = styled.label`
  color: var(--wb-900);
  ${CSSTypo}
`;

export default function CheckBox({ label, ...props }: typeInputProps) {
  return (
    <FlexBox>
      <StyledInput type="checkbox" {...props} />
      <Label>{label}</Label>
    </FlexBox>
  );
}
