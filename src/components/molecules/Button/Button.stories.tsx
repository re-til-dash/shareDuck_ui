import Button from "./Button";
import { Meta } from "@storybook/react";
import PlusIcon from '/icons/plus.svg'

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

function handleClick() {
  console.log("clicked");
}

export function Default() {
  return (
    <Button onClick={handleClick}>
      <Button.Icon src={PlusIcon} alt={"plus"} />
      <Button.Text>New Category</Button.Text>
    </Button>
  );
}

export function TextButton() {
  return (
    <Button onClick={handleClick}>
      <Button.Text>Click me!</Button.Text>
    </Button>
  );
}

export function IconButton() {
  return (
    <Button onClick={handleClick}>
      <Button.Icon src={PlusIcon} alt={"plus"} />
    </Button>
  );
}
