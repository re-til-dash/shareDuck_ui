import { Meta } from "@storybook/react";
import IconButton, { typeIconButtonProps } from "./IconButton";
import ExampleIcon from '../../../../public/icons/message_dark.svg';

const meta : Meta<typeof IconButton> = {
    component: IconButton
} 
export default meta;

export function PrimaryStory(args:typeIconButtonProps){
    return <IconButton.Primary src={args.src || ExampleIcon}  alt={args.alt}/>   
}
export function SecondaryStory(args:typeIconButtonProps){
    return <IconButton.Secondary src={args.src || ExampleIcon}  alt={args.alt}/>   
}
export function DefaultStory(args:typeIconButtonProps){
    return <IconButton src={args.src || ExampleIcon}  alt={args.alt}/>   
}