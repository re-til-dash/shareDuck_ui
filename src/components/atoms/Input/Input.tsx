import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export interface typeInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled.input`
  outline: none;
  height: 40px;
  padding: 6px 8px;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--wb-400);
  color: var(--wb-900);
  &:focus {
    border: 1px solid var(--wb-400);
  }
  &::placeholder {
    color: var(--wb-400);
  }
`;
export default function Input({ ...props }: typeInputProps) {
  return <StyledInput {...props} />;
}
