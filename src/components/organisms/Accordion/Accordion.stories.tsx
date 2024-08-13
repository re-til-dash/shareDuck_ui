import ListButton from "../../molecules/ListButton/ListButton";
import Accordion from "./Accordion";
import { Meta } from "@storybook/react";
import { useAccordion } from "../../../hooks/useAccordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;

const options = ["Overview", "Post"];

export function Default() {
  const accordion = useAccordion();
  const data = accordion.getDatas();
  return (
    <>
      <Accordion controller={accordion}>
        <ListButton options={options}>
          <ListButton.Icon name="message_dark" alt="message" />
          <ListButton.Text>Message</ListButton.Text>
        </ListButton>
        {/* <ListButton options={options}>
          <ListButton.Icon name="message_dark" alt="message" />
          <ListButton.Text>Message</ListButton.Text>
        </ListButton> */}
      </Accordion>
      <hr />
      <p>select index : {data.selectIndex}</p>
      <p>sub select index : {data.subSelecetIndex}</p>
    </>
  );
}
