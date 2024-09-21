import { LiHTMLAttributes } from "react";
import createTypoStyle from "../../../style/TypoStyle";
import styled from "styled-components"

export interface typeListProps extends LiHTMLAttributes<HTMLLIElement>{}

export default function List ({children, ...props}:typeListProps){

    return <StyledList {...props}>{children}</StyledList>
}

const CSSText = createTypoStyle("typo-body-14");

const StyledList = styled.li`
    width: 100%;
    background-color: var(--wb-000);
    border: none;
    border-radius: 8px;
    padding: 14px 8px;

    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--wb-300);

    background-color: var(--wb-000);
  
`