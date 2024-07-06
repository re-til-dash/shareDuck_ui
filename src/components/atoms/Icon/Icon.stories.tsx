import styled from "styled-components";
import Icon from "./Icon";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "components/atoms/Icon",
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export function Primary({ args }: Story) {
  return <Icon name={args?.name || "message"} alt={args?.alt || "못찾을 때"} />;
}

export function Test({ args }: Story) {
  return (
    <StyeldTextBox>
      <Icon name={args?.name || "message"} alt={args?.alt || "못찾을 때"} />
    </StyeldTextBox>
  );
}

const StyeldTextBox = styled.div`
  width: 24px;
  height: 24px;
  background-color: black;
`;
