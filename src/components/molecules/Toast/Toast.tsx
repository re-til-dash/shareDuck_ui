import { HTMLAttributes } from "react";
import styled from "styled-components";
import Icon from "../../atoms/Icon/Icon";

export interface typeToastProps extends HTMLAttributes<HTMLSpanElement>{
    content: string;
}
const DefaultToast = styled.div`
width: 220px;
height: 30px;
top: 20px;
left: 20px;
padding: 12px 16px;
gap: 8px;
border-radius: 8px;
display: flex; /* Flexbox 적용 */
align-items: center; /* 세로 중앙 정렬 */
`
Toasts.Emoji = styled.image`
width: 36px;
height: 36px;
padding: 6px;
border-radius: 9999px;
display: inline-block
`

Toasts.Text = styled.span`
font-family: SUIT;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.006em;
text-align: left;
`

Toasts.Icon = Icon;

function Toasts({
    backgroundColor,
    text,
    ...props
}: typeToastProps){
    console.log(backgroundColor)
    return (
        <DefaultToast 
        style={{ backgroundColor : backgroundColor}}
        {...props}>
        </DefaultToast>
    )
}

export default Toasts;