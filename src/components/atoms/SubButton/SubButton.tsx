import { styled } from "styled-components";
import createTypoStyle from "../../../style/TypoStyle";
import { ButtonHTMLAttributes } from "react";

const CSSButtonText = createTypoStyle("typo-body-14-bold");

const Button = styled.button<{ $isSelected: boolean }>`
  background-color: var(--wb-000);
  border: none;
  border-radius: 8px;
  width: 200px;
  height: 52px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  color: ${props => (props.$isSelected ? "var(--vio-500)" : "var(--wb-500)")};
  &:hover {
    ${props =>
      !props.$isSelected && "background-color: rgba(20, 19, 20, 0.05);"}
  }
  ${CSSButtonText}
`;

export interface typeSubButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
}

function SubButton({ isSelected, children, ...props }: typeSubButtonProps) {
  return (
    <Button $isSelected={isSelected} {...props}>
      {children}
    </Button>
  );
}

export default SubButton;
