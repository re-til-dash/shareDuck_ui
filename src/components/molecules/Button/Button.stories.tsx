import Button from "./Button";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

function log() {
  console.log("clicked");
}

export function All() {
  return (
    <Button onClick={log}>
      <Button.Icon name={"plus"} alt={"plus"} />
      <Button.Text>New Category</Button.Text>
    </Button>
  );
}

export function Text() {
  return (
    <Button onClick={log}>
      <Button.Text>Click me!</Button.Text>
    </Button>
  );
}

export function Icon() {
  return (
    <Button onClick={log}>
      <Button.Icon name={"plus"} alt={"plus"} />
    </Button>
  );
}
