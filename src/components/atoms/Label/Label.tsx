import { LabelHTMLAttributes } from "react"
import styled from "styled-components";

export interface typeLabelProps extends LabelHTMLAttributes<HTMLLabelElement>{
}

export default function Label ({children, ...props}:typeLabelProps) {

    return <StyledLabel {...props}>{children}</StyledLabel>
}

const StyledLabel = styled.label`
    list-style-type: none
`