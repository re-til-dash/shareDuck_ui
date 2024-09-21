
import List, { typeListProps } from "./List";
import { Meta } from "@storybook/react";

const meta: Meta<typeof List> = {
  component: List,

};

export default meta;

export function Default(args:typeListProps ) {
  return (
    <List>
        {args.children ?? "List"}
    </List>
  );
}

