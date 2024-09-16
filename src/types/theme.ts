
import { color } from "../../public/variables/light.json";
type typeColors = keyof typeof color;
export type typeTheme = {
    [key in typeColors]: string;
};