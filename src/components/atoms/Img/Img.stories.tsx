import Img, { typeImgProps } from "./Img";

import { Meta } from "@storybook/react";

const meta: Meta<typeof Img> = {
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    style: { control: "object" },
  },
};

export default meta;

export function CircleImg(args: typeImgProps) {
  return (
    <Img
      alt="placeholder"
      src={args.src ?? "https://via.placeholder.com/150"}
      style={{ borderRadius: "50%" }}
    />
  );
}
