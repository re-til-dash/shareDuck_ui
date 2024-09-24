import { createContext, HTMLAttributes, useContext } from "react";
import styled, { css } from "styled-components";

import IconButton from "../../molecules/IconButton/IconButton";
import { typeButtonProps } from "../../molecules/Button/Button";

import CloseIcon from '../../../../public/icons/titlebar-close.svg';
import SizeIcon from '../../../../public/icons/titlebar-size.svg';
import DownIcon from '../../../../public/icons/titlebar-min.svg';

export interface typeTitlebarIconsProps extends HTMLAttributes<HTMLElement>{
    os : "MAC" | "WIN"
}

const TitlebarContext = createContext<"MAC" | "WIN">(null);

const MacCSS = css`
    width: 12px;
    height: 12px;

    & >img{
        opacity: 0;
    }

    & > img:hover{
        opacity: 1;
    }
`

function CloseIconButton({...props}: typeButtonProps){
    const os = useContext(TitlebarContext)
    if(os === "MAC"){
        return <StyledCloseButton  src={CloseIcon} alt="close" {...props}/>
    }
    return <IconButton.Secondary src={CloseIcon} alt="close" {...props}/>
}

const StyledCloseButton = styled(IconButton.Secondary)`
    background-color: #ED695D;
    ${MacCSS}
`

function SizeIconButton({...props}: typeButtonProps){
    const os = useContext(TitlebarContext)
    if(os === "MAC"){
        return <StyledSizeButton  src={SizeIcon} alt="close" {...props}/>
    }
    return <IconButton.Secondary src={SizeIcon} alt="close" {...props}/>
}

const StyledSizeButton = styled(IconButton.Secondary)`
    background-color: #61C554;
    ${MacCSS}
`

function DownIconButton({...props}: typeButtonProps){
    const os = useContext(TitlebarContext)
    if(os === "MAC"){
        return <StyledDownButton  src={DownIcon} alt="close" {...props}/>
    }
    return <IconButton.Secondary src={DownIcon} alt="close" {...props}/>
}

const StyledDownButton = styled(IconButton.Secondary)`
    background-color: #F5BE4F;
    ${MacCSS}
`


TitlebarIcons.Close = CloseIconButton
TitlebarIcons.Size = SizeIconButton
TitlebarIcons.Down = DownIconButton

export default function TitlebarIcons({children, os}:typeTitlebarIconsProps){
    const value = os;
    return <TitlebarContext.Provider value={value}><StyledContainer>{children}</StyledContainer></TitlebarContext.Provider>
}

const StyledContainer = styled.div`
    display: flex;
    gap: 16px;
`