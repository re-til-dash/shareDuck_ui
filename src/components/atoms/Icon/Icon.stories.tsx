import styled from "styled-components";
import Icon from "./Icon";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "components/atoms/Icon",
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

// 아이콘이 보이지 않아 테스트용 검정 박스
const DarkBox = styled.div`
  width: 24px;
  height: 24px;
  background-color: black;
`;

export function Default({ args }: Story) {
  return <Icon src={args?.src } alt={args?.alt || "못찾을 때"} />;
}

export function Dark({ args }: Story) {
  return (
    <DarkBox>
      <Icon src={args?.src} alt={args?.alt || "못찾을 때"} />
    </DarkBox>
  );
}
