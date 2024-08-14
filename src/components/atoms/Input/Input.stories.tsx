import Input, { typeInputProps } from "./Input";

import { Meta } from "@storybook/react";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

export function InputStory(args: typeInputProps) {
  return <Input {...args} />;
}

export function InputWithPlaceholderStory(args: typeInputProps) {
  return <Input placeholder={args.placeholder || "Hello world"} {...args} />;
}
