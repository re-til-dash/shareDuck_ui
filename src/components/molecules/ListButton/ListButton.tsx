import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import createTypoStyle from "../../../style/TypoStyle";
import Icon from "../../atoms/Icon/Icon";
import React from "react";

export interface typeListButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
  lists: React.ReactNode[];
}

const StyledButton = styled.button<{
  $isSelected: boolean;
}>`
  background-color: var(
    ${props => (!props.$isSelected ? "--wb-000" : "--vio-000")}
  );
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 14px;
  margin-right: auto;
  justify-content: space-between;
  &:hover {
    ${props =>
      !props.$isSelected && "background-color: rgba(20, 19, 20, 0.05);"}
  }
`;

const GapBox = styled.div`
  display: flex;
  gap: 16px;
`;

const FlexBox = styled.div<{ $childCount: number }>`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: ${props => (props.$childCount > 1 ? "240px" : "52px")};
`;

const CSSButtonText = createTypoStyle("typo-body-14-bold");

function ListButton({
  isSelected,
  children,
  lists,
  ...props
}: typeListButtonProps) {
  const childCount = React.Children.count(children);
  return (
    <FlexBox $childCount={childCount}>
      <StyledButton $isSelected={isSelected} {...props}>
        <GapBox>{children}</GapBox>
        {childCount > 1 && (
          <Icon name={`arrow_${isSelected ? "up" : "down"}`} alt="arrow" />
        )}
      </StyledButton>
      {isSelected && childCount > 1 && lists.map(list => list)}
    </FlexBox>
  );
}

ListButton.SubButton = styled.button<{ $isSelected: boolean }>`
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

ListButton.Text = styled.span`
  color: var(--wb-700);
  ${CSSButtonText}
`;

ListButton.Icon = Icon;

export default ListButton;
