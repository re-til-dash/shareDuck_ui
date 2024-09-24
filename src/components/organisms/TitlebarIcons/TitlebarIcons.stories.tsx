import { Meta } from "@storybook/react";
import TitlebarIcons from "./TitlebarIcons";
const meta : Meta<typeof TitlebarIcons>={
    component: TitlebarIcons,
    argTypes: {
        os: {
            control: {
                type: 'select',
                options: ['MAC', 'WIN'],
            },
        },
    }
}

export default meta;

export function MacTitleBar(){
    return <TitlebarIcons os="MAC">
        <TitlebarIcons.Close />
        <TitlebarIcons.Down />
        <TitlebarIcons.Size />
    </TitlebarIcons>
}

export function WinTitleBar(){
    return <TitlebarIcons os="WIN">
        <TitlebarIcons.Down />
        <TitlebarIcons.Size />
        <TitlebarIcons.Close />
    </TitlebarIcons>
}