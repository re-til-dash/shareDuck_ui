import Input, { typeInputProps } from "./Input";

import { Meta } from "@storybook/react";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    placeholder: "",
  },
};

export default meta;

export function InputStory(args: typeInputProps) {
  return <Input {...args} />;
}
