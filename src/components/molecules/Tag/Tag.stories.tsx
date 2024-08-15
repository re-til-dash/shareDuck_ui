import { Meta } from "@storybook/react";
import Tag, { typeTagProps } from "./Tag";

const meta:Meta<typeof Tag> = {
    component: Tag,
    argTypes:{
        content:{
            control: 'text',
            description: "태그의 내용을 입력하세요"
        }
    },
    args:{
        content: "tag"
    }
}

export default meta;

export const PrimaryTag = (args: typeTagProps) => {
    return <Tag.Primary>{args.content}</Tag.Primary>
}

export const SecondaryTag = (args: typeTagProps) => {
    return <Tag.Secondary>{args.content}</Tag.Secondary>
}
export const BasicTag = (args: typeTagProps) => {
    return <Tag.Basic>{args.content}</Tag.Basic>
}