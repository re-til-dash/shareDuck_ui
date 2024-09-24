import { createContext, useContext } from "react";
import Img, { typeImgProps } from "../Img/Img";

export interface typeIconProps extends typeImgProps { width?:number, height?:number; }

const IconContext = createContext<typeIconProps>(null);

function PrimaryIcon({ src, alt,  width = 24, height = 24 }: typeIconProps){
  const value = useContext(IconContext)
  return <Img src={src} alt={alt}width={width} height={height} {...value} />
}

function SecondaryIcon({ src, alt, width = 14, height = 14 }: typeIconProps){
   const value = useContext(IconContext)
  return <Img src={src} alt={alt} width={width} height={height} {...value} />
}

Icon.Primary = PrimaryIcon;
Icon.Secondary = SecondaryIcon;


export default function Icon({ src, alt, width, height, ...props }: typeIconProps) {
  const value = { src, alt, width, height, ...props }
  return <IconContext.Provider value={value}><Img src={src} alt={alt} width={width} height={height} /></IconContext.Provider>;
}

