import { HTMLAttributes, createContext, useContext } from "react";
import styled from "styled-components";
import Img, { typeImgProps } from "../../atoms/Img/Img";
import createTypoStyle from "../../../style/TypoStyle";
//기존 backgroundColor에서 variants로 수정

type typeVariants = "warn" | "error" | "pass";

export interface typeToastTextProps extends HTMLAttributes<HTMLSpanElement>{
    content: string;
}
export interface typeToastProps extends HTMLAttributes<HTMLSpanElement>{
    variants:typeVariants ;
}

const ToastContext = createContext<typeVariants | null>(null)

const DefaultToast = styled.span<{variants:typeVariants}>`
    position: relative;
    width: fit-content;
    height: fit-content;
`

function ToastsEmoji({src, alt, ...props}: typeImgProps){
    const value = useContext(ToastContext)
    return <StyledImg variants={value} src={src} alt={alt} width={36} height={36} {...props}/>
}

const StyledImg = styled(Img)<{variants:typeVariants}>`
    padding: 6px;
    border-radius: 9999px;
    display: inline-block;
    background-color: ${({variants})=>variants==="warn" ? "var(--yel-000)": variants === "error" ? "var(--red-000)": "var(--gre-000)"};
    position: absolute;
    inset: 0;
    margin: auto;
    margin-left: 16px;
`

function ToastsText({content, ...props}:typeToastTextProps){
    const value = useContext(ToastContext)
    return <StyledSpan variants={value} {...props}>{content}</StyledSpan>
}

const CSSToastsText = createTypoStyle("typo-body-14")
const StyledSpan = styled.span<{variants:typeVariants}>`    
    ${CSSToastsText}
    text-align: left;
    padding: 3px 16px 3px 60px;
    border-radius: 8px;
    color:  ${({variants})=>variants==="warn" ? "var(--yel-900)": variants === "error" ? "var(--red-900)": "var(--gre-900)"};
    background-color: ${({variants})=>variants==="warn" ? "var(--yel-000)": variants === "error" ? "var(--red-000)": "var(--gre-000)"};
`

function Toasts({
    variants,
    children,
    ...props
}: typeToastProps){
    return (
        <ToastContext.Provider value={variants}>
            <DefaultToast variants={variants}
            {...props}>
                {children}
            </DefaultToast>
        </ToastContext.Provider>
    )
}

Toasts.Emoji = ToastsEmoji
Toasts.Text = ToastsText
export default Toasts;