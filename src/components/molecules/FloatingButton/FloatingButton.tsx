import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import Icon from "../../atoms/Icon/Icon";

interface typeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button`
  background-color: var(--vio-500);
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px var(--vio-200);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--vio-600);
  }
  &:active {
    outline: none;
    background-color: var(--vio-700);
  }
`;

function FloatingButton({ children, ...props }: typeButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

FloatingButton.Icon = Icon;

export default FloatingButton;
