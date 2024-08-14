import { Meta } from "@storybook/react";
import Tag from "./Tag";

const meta:Meta<typeof Tag> = {
    component: Tag
}

export default meta;

export const PrimaryTag = () => {
    return <Tag.Primary>tag</Tag.Primary>
}

export const SecondaryTag = () => {
    return <Tag.Secondary>tag</Tag.Secondary>
}
export const BasicTag = () => {
    return <Tag.Basic>tag</Tag.Basic>
}