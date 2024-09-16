import Img from "../Img/Img";

export interface typeIconProps { src: string; alt: string; }

export default function Icon({ src, alt }: typeIconProps) {
  return <Img src={src} alt={alt} width={24} height={24} />;
}
