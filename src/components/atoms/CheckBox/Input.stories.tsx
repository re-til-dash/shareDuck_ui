import CheckBox, { typeInputProps } from "./CheckBox";

import { Meta } from "@storybook/react";

const meta: Meta<typeof CheckBox> = {
  title: "components/atoms/CheckBox",
  component: CheckBox,
  args: {
    label: undefined,
  },
};

export default meta;

export function CheckBoxStory(args: typeInputProps) {
  return <CheckBox {...args} />;
}
