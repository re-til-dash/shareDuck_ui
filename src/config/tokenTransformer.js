import fs from "fs";
import { transformTokens } from "token-transformer";

const originFilePath = "src/assets/tokens.json";
const filePath = "src/style";

// 변환 옵션
const transformerOptions = {};

// 파일 읽기
fs.readFile(originFilePath, "utf8", (err, data) => {
  if (err) throw err;
  const tokens = JSON.parse(data);

  // $metadata에 token key가 있음
  const tokenKeys = [...tokens.$metadata.tokenSetOrder];

  tokenKeys.forEach((key) => {
    // 변환 작업
    /**
     * @argument 변환할 파일, 참조 대상, 추출 제외 대상, 변환 옵션
     */
    const resolved = transformTokens(
      tokens,
      [key],
      tokenKeys.filter((k) => k !== key),
      transformerOptions
    );

    // 파일 생성
    fs.writeFileSync(
      `${filePath}/${key}.json`,
      JSON.stringify(resolved),
      (err) => {
        if (err) throw err;
      }
    );
  });
});
