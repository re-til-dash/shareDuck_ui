import styled from "styled-components";
import Icon, { typeIconProps } from "./Icon";
import { Meta } from "@storybook/react";
import ExampleIcon from '../../../../public/icons/message_dark.svg';

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;

// 아이콘이 보이지 않아 테스트용 검정 박스
const DarkBox = styled.div`
  width: 24px;
  height: 24px;
  background-color: black;
`;


export function PrimaryStory(args: typeIconProps) {
  return <Icon.Primary src={args?.src || ExampleIcon} alt={args?.alt} />;
}
export function SecondaryStory(args: typeIconProps) {
  return <Icon.Secondary src={args?.src || ExampleIcon} alt={args?.alt} />;
}

export function DefaultStory(args: typeIconProps) {
  return <Icon src={args?.src || ExampleIcon} alt={args?.alt} />;
}

export function Dark(args: typeIconProps) {
  return (
    <DarkBox>
      <Icon src={args?.src || ExampleIcon} alt={args?.alt} />
    </DarkBox>
  );
}
