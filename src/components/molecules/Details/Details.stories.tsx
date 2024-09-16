import { useState } from "react";
import Details from "./Details";
import { Meta } from "@storybook/react";
import ExampleIcon from '../../../../public/icons/message_dark.svg'
import ArrowDownIcon from '../../../../public/icons/arrow_down.svg'
import ArrowUpIcon from '../../../../public/icons/arrow_up.svg'

const meta: Meta<typeof Details> = {
  component: Details,
};

export default meta;

const options = ["Overview", "Post"];

export function Default() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Details
      open={isSelected}
      lists={options}
      onClick={function handleClick() {
        setIsSelected(!isSelected);
      }}
    >
      <Details.Icon src={ExampleIcon} alt="message" />
      <Details.Text>New Category</Details.Text>
     {isSelected ?
     <Details.Icon src={ArrowDownIcon} alt="message" /> 
     
    : <Details.Icon src={ArrowUpIcon} alt="message" /> 
     }
    </Details>
  );
}

export function IconStory() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Details
      open={isSelected}
      lists={[]}
      onClick={function handleClick() {
        setIsSelected(!isSelected);
      }}
    >
      <Details.Icon src={ExampleIcon} alt="message" />
    </Details>
  );
}
