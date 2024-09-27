import { Meta } from "@storybook/react";
import Toasts from "./Toast"
import Emoji1 from "/emoji/happy-face.svg"
import Emoji2 from "/emoji/worried-face.svg"
import Emoji3 from "/emoji/crying-face.svg"

const meta:Meta<typeof Toasts> = {
    component: Toasts,
}
export default meta;

export function GreenToast(){
    return (
        <Toasts 
        variants={"pass"}
        >
            <Toasts.Emoji src={Emoji1} alt=""/> 
            <Toasts.Text content="사용 가능한 이메일입니다." />
        </Toasts>
        )
}

export function YellowToast(){
    return (
        <Toasts
       variants={"warn"}
        >
            <Toasts.Emoji src={Emoji2} alt=""/> 
            <Toasts.Text content="사용 가능한 이메일입니다." />
        </Toasts>
        )
}

export function RedToast(){
    return (
        <Toasts
        variants={"error"}>
            <Toasts.Emoji src={Emoji3} alt=""/> 
            <Toasts.Text content="사용 가능한 이메일입니다." />
        </Toasts>
        )
}