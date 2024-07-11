import { ImgHTMLAttributes } from "react";
import styled from "styled-components";

export interface typeImgProps extends ImgHTMLAttributes<HTMLImageElement> {}

export default function Img({ src, alt, ...props }: typeImgProps) {
  return <StyledImg src={src} alt={alt} {...props} />;
}

const StyledImg = styled.img`
  aspect-ratio: 1/1;
  object-position: center;
  object-fit: cover;
  ${props => (props.style ? { ...props.style } : "")}
`;
