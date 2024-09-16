import { css } from "styled-components";
import global from "../../public/global.json";

type typeTypoKeys = typeof global.typo;

type typeTypoStyle = keyof typeTypoKeys;

export default function createTypoStyle(varTypo: typeTypoStyle) {
  const value = global.typo[varTypo].value;
  // 글로벌 폰트 작동 안하는중
  return css`
    font-family: ${value.fontFamily};
    font-size: ${value.fontSize + "px"};
    line-height: ${value.lineHeight + "px"};
    font-weight: ${value.fontWeight};
  `;
}

//예시: const typoHead48 = createTypoStyle("typo-head-48");
