import Icon from "../../atoms/Icon/Icon";
import styled from "styled-components";
import { typeButtonProps } from "../Button/Button";

export interface typeIconButtonProps extends typeButtonProps{
    src: string;
    alt: string;
    width?:number;
    height?:number;
}
function PrimaryIconButton({src, alt, ...props}:typeIconButtonProps){
    return <StyledButton $variants="primary" {...props}>
        <Icon.Primary src={src} alt={alt}/>
    </StyledButton>
}

function SecondaryIconButton({src, alt, ...props}:typeIconButtonProps){
    return <StyledButton $variants="secondary" {...props}>
        <Icon.Secondary src={src} alt={alt}/>
    </StyledButton>
}

IconButton.Primary = PrimaryIconButton;
IconButton.Secondary = SecondaryIconButton;

export default function IconButton({src, alt, width, height, ...props}:typeIconButtonProps){
   return  <StyledButton $variants="basic" {...props}>
        <Icon src={src} alt={alt} width={width} height={height}/>
    </StyledButton>
}

const StyledButton = styled.button<{$variants: "primary" | "secondary" | "basic"}>`
    border: none;
    min-width: 24px;
    min-height: 24px;
    border-radius: 50%;
    background: var(--wb-100, #efe9f1);
    padding: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({$variants})=>{
        return $variants === "primary" ? "var(--vio-500)" : $variants === "secondary" ? "var(--vio-100)" : "var(--wb-000)"
    }}
`