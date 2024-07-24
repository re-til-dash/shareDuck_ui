import Label, { typeLabelProps } from "./Label";

import { Meta } from "@storybook/react";

const meta :Meta<typeof Label>= {
    component: Label,
    tags: ["autodocs"],
    argTypes:{
        children: {
            control: 'text'
        }
    }
}

export default meta;


export const LabelStory = (args:typeLabelProps) => {
    return <Label>{args.children ?? "text"}</Label>
}