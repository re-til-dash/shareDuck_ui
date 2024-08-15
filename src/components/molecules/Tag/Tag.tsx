import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface typeTagProps extends HTMLAttributes<HTMLSpanElement>{
    content: string;
}

const DefaultTag = styled.span`
    border-radius: 9999px;
    padding: 1em;
`

const PrimaryTag = styled(DefaultTag)`
    border: 1px solid var(--vio-400);
    background:var(--vio-100);
    color: var(--vio-400);
    padding: 4px 8px 6px 8px;
`

const SecondaryTag = styled(DefaultTag)`
    border: 1px solid var(--vio-400);
    background:var(--wb-000);
    color: var(--vio-400);
    padding: 4px 8px 6px 8px;
`

const BasicTag = styled(DefaultTag)`
    border: 1px solid var(--vio-000);
    background: #F2F2F2;
    padding: 3px 23px;
`

function Tag({content, ...props}:typeTagProps){
    return <DefaultTag  {...props}>{content}</DefaultTag>
}

Tag.Primary = PrimaryTag;
Tag.Secondary = SecondaryTag;
Tag.Basic = BasicTag;


export default  Tag