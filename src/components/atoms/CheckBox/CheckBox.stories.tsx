import CheckBox, { typeInputProps } from "./CheckBox";

import { Meta } from "@storybook/react";

const meta: Meta<typeof CheckBox> = {
  title: "components/atoms/CheckBox",
  component: CheckBox,
  args: {
    label: undefined,
    disabled: false,
  },
};

export default meta;

export function DefaultStory(args: typeInputProps) {
  return <CheckBox {...args} />;
}

export function LabelStory(args: typeInputProps) {
  return <CheckBox {...args} label="checkbox"/>;
}
