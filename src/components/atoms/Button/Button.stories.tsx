import Button, { IconType } from "./Button";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export function NewCategory(args: { onClick: () => void; icon: IconType }) {
  return (
    <Button onClick={() => console.log("create a category")} icon={args.icon}>
      New Category
    </Button>
  );
}
