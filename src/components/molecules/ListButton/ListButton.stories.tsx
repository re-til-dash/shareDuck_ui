import { useState } from "react";
import ListButton from "./ListButton";
import { Meta } from "@storybook/react";

const meta: Meta<typeof ListButton> = {
  component: ListButton,
};

export default meta;

const options = ["Overview", "Post"];

export function Default() {
  const [isSelected, setIsSelected] = useState(false);
  const [slectIndex, setSelectIndex] = useState(0);
  return (
    <ListButton
      isSelected={isSelected}
      lists={options.map((option, index) => (
        <ListButton.SubButton
          key={index}
          $isSelected={slectIndex === index}
          onClick={() => setSelectIndex(index)}
        >
          {option}
        </ListButton.SubButton>
      ))}
      onClick={function handleClick() {
        setIsSelected(!isSelected);
      }}
    >
      <ListButton.Icon name="message_dark" alt="message" />
      <ListButton.Text>New Category</ListButton.Text>
    </ListButton>
  );
}

export function IconStory() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <ListButton
      isSelected={isSelected}
      lists={[]}
      onClick={function handleClick() {
        setIsSelected(!isSelected);
      }}
    >
      <ListButton.Icon name="message_dark" alt="message" />
    </ListButton>
  );
}
