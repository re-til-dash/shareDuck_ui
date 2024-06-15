import { css } from "styled-components";
import global from "./global.json";

type typeTypoKeys = typeof global.typo;

type typeTypoStyle = keyof typeTypoKeys;

export default function createTypoStyle(varTypo: typeTypoStyle) {
  const value = global.typo[varTypo].value;
  return css`
    font-size: ${value.fontSize};
    line-height: ${value.lineHeight};
    font-weight: ${value.fontWeight};
  `;
}

//예시: const typoHead48 = createTypoStyle("typo-head-48");
