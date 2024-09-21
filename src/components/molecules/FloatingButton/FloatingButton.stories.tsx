import FloatingButton from "./FloatingButton";
import { Meta } from "@storybook/react";
import ExampleIcon from '/icons/write.svg';

const meta: Meta<typeof FloatingButton> = {
  component: FloatingButton,
};

export default meta;

export function FloatingButtonStory() {
  return (
    <FloatingButton onClick={() => console.log("test")}>
      <FloatingButton.Icon src={ExampleIcon} alt="write" />
    </FloatingButton>
  );
}
