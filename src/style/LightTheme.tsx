import { DefaultTheme } from "styled-components";

import { color } from "../../public/variables/light.json";

const LightTheme = Object.keys(color).reduce((theme, key) => {
    return {
    ...theme,
    [key]: color[key as keyof typeof color].value
  };
}, {} as DefaultTheme);

export default LightTheme;


// const LightTheme: DefaultTheme = {
//   "wb-000": color["wb-000"].value,
//   "wb-070": color["wb-070"].value,
//   "wb-200": color["wb-200"].value,
//   "wb-300": color["wb-300"].value,
//   "wb-400": color["wb-400"].value,
//   "wb-500": color["wb-500"].value,
//   "wb-600": color["wb-600"].value,
//   "wb-700": color["wb-700"].value,
//   "wb-800": color["wb-800"].value,
//   "wb-900": color["wb-900"].value,
//   "wb-100": color["wb-100"].value,
//   "vio-000": color["vio-000"].value,
//   "vio-100": color["vio-100"].value,
//   "vio-200": color["vio-200"].value,
//   "vio-300": color["vio-300"].value,
//   "vio-400": color["vio-400"].value,
//   "vio-500": color["vio-500"].value,
//   "vio-600": color["vio-600"].value,
//   "vio-700": color["vio-700"].value,
//   "vio-800": color["vio-800"].value,
//   "vio-900": color["vio-900"].value,
//   "yel-100": color["yel-100"].value,
//   "yel-200": color["yel-200"].value,
//   "yel-300": color["yel-300"].value,
//   "yel-400": color["yel-400"].value,
//   "yel-500": color["yel-500"].value,
//   "yel-600": color["yel-600"].value,
//   "yel-700": color["yel-700"].value,
//   "yel-800": color["yel-800"].value,
//   "yel-900": color["yel-900"].value,
//   "yel-000": color["yel-000"].value,
//   "red-000": color["red-000"].value,
//   "red-200": color["red-200"].value,
//   "red-300": color["red-300"].value,
//   "red-400": color["red-400"].value,
//   "red-500": color["red-500"].value,
//   "red-600": color["red-600"].value,
//   "red-700": color["red-700"].value,
//   "red-800": color["red-800"].value,
//   "red-900": color["red-900"].value,
//   "red-100": color["red-100"].value,
//   "gre-000": color["gre-000"].value,
//   "gre-100": color["gre-100"].value,
//   "gre-200": color["gre-200"].value,
//   "gre-300": color["gre-300"].value,
//   "gre-400": color["gre-400"].value,
//   "gre-500": color["gre-500"].value,
//   "gre-600": color["gre-600"].value,
//   "gre-700": color["gre-700"].value,
//   "gre-800": color["gre-800"].value,
//   "gre-900": color["gre-900"].value,
//   "tur-000": color["tur-000"].value,
//   "tur-100": color["tur-100"].value,
//   "tur-200": color["tur-200"].value,
//   "tur-300": color["tur-300"].value,
//   "tur-400": color["tur-400"].value,
//   "tur-500": color["tur-500"].value,
//   "tur-600": color["tur-600"].value,
//   "tur-700": color["tur-700"].value,
//   "tur-800": color["tur-800"].value,
//   "tur-900": color["tur-900"].value,
// };

