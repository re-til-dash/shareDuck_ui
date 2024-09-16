import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import createTypoStyle from "../../../style/TypoStyle";
import Icon from "../../atoms/Icon/Icon";

// NOTE: 고정 픽셀을 하드 코딩하는 것 보다
// 그 상황에서 스타일링하는게 좋을 것 같음

// type ButtonType = "only" | "all";

export interface typeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

// <{ type: ButtonType }>
/* ${(props) => props.type === "all" && { width: "240px" }}; */

const StyledButton = styled.button`
  background-color: var(--vio-300);
  min-width: 52px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px;

  & > :first-child {
    margin-right: auto;
  }
`;

const CSSButtonText = createTypoStyle("typo-body-18-bold");

function Button({ onClick, children, ...props }: typeButtonProps) {
  /* const [type, setType] = React.useState<ButtonType>("only");
  useEffect(() => {
    let hasIcon = false;
    let hasText = false;
 
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === Icon) hasIcon = true;
      if (React.isValidElement(child) && child.type === Button.Text)
        hasText = true;
    });
 
    if (hasIcon && hasText) setType("all");
    else setType("only");
  }, [children]); */
  return (
    <StyledButton onClick={onClick} {...props} /* type={type} */>
      {children}
    </StyledButton>
  );
}

Button.Text = styled.span`
  color: var(--wb-000);
  ${CSSButtonText}
`;

Button.Icon = Icon;

export default Button;
