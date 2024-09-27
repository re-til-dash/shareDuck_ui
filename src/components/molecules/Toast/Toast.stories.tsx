import { useState } from "react";
import { Meta } from "@storybook/react";
import Toasts from "./Toast"
import Emoji1 from "/icons/Toast1.svg"
import Emoji2 from "/icons/Toast2.svg"
import Emoji3 from "/icons/Toast3.svg"

const meta:Meta<typeof Toasts> = {
    component: Toasts,
}
export default meta;

export function GreenToast(){
    return (
        <Toasts 
        backgroundColor={"#F5FFE1"}
        >
            <Toasts.Emoji  style={{backgroundColor:"#F5FFE1"}} > 
                <Toasts.Icon src={Emoji1} alt=""/>
            </Toasts.Emoji>
            <Toasts.Text style={{color: "#4F7700"}} >사용 가능한 이메일입니다.</Toasts.Text>
        </Toasts>
        )
}

export function YellowToast(){
    return (
        <Toasts
        backgroundColor={"#FFF8EA"}
        >
            <Toasts.Emoji  style={{backgroundColor:"#FFF8EA"}} > 
                <Toasts.Icon src={Emoji2} alt=""/>
            </Toasts.Emoji>
            <Toasts.Text style={{color: "#A87200"}}>사용 가능한 이메일입니다.</Toasts.Text>
        </Toasts>
        )
}

export function RedToast(){
    return (
        <Toasts
        backgroundColor={"#FFE9E7"}>
             <Toasts.Emoji  style={{backgroundColor:"#FFE9E7"}} > 
                <Toasts.Icon src={Emoji3} alt=""/>
            </Toasts.Emoji>
            <Toasts.Text style={{color: "#A51202"}}>사용 가능한 이메일입니다.</Toasts.Text>
        </Toasts>
        )
}