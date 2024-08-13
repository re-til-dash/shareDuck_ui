import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import createTypoStyle from "../../../style/TypoStyle";
import Icon from "../../atoms/Icon/Icon";
import React from "react";
import SubButton from "../../atoms/SubButton/SubButton";

export interface typeListButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  options?: string[];
}

const CSSButtonText = createTypoStyle("typo-body-14-bold");

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

function ListButton({
  isSelected,
  children,
  options,
  ...props
}: typeListButtonProps) {
  const childCount = React.Children.count(children);
  return (
    <FlexBox $childCount={childCount} id="flex">
      <StyledButton $isSelected={Boolean(isSelected)} {...props}>
        <GapBox>{children}</GapBox>
        {childCount > 1 && (
          <Icon name={`arrow_${isSelected ? "up" : "down"}`} alt="arrow" />
        )}
      </StyledButton>
      {isSelected &&
        options &&
        childCount > 1 &&
        options.map(option => (
          <ListButton.SubButton key={option} isSelected={false}>
            {option}
          </ListButton.SubButton>
        ))}
    </FlexBox>
  );
}

ListButton.FlexBox = FlexBox;

ListButton.Text = styled.span`
  color: var(--wb-700);
  ${CSSButtonText}
`;

ListButton.SubButton = SubButton;

ListButton.Icon = Icon;

export default ListButton;
