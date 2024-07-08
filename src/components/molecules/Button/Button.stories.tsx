import Button from "./Button";
import { Meta } from "@storybook/react";

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
      <Button.Icon name={"plus"} alt={"plus"} />
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
      <Button.Icon name={"plus"} alt={"plus"} />
    </Button>
  );
}
