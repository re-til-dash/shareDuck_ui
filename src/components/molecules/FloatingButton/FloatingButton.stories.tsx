import FloatingButton from "./FloatingButton";
import { Meta } from "@storybook/react";

const meta: Meta<typeof FloatingButton> = {
  component: FloatingButton,
};

export default meta;

export function FloatingButtonStory() {
  return (
    <FloatingButton onClick={() => console.log("test")}>
      <FloatingButton.Icon name="write" alt="write" />
    </FloatingButton>
  );
}
