import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export type IconType = "only" | "all";

export interface typeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

export default function Button({ onClick, children, icon }: typeButtonProps) {
  return (
    <StyledButton icon={icon} onClick={onClick}>
      {icon === "all" && children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ icon: IconType }>`
  background-color: var(--vio-300);
  height: 52px;
  border: none;
  border-radius: 8px;
  padding: 10px;
  color: white;
  width: ${(props) => (props.icon === "all" ? "224px" : "52px")};
`;
