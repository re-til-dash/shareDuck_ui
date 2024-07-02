import { describe, expect, test } from "vitest";

import global from "./global.json";

describe("", () => {
  test("글로벌 스타일 파일에서 json의 값을 올바르게 불러오는지 확인한다.", () => {
    expect(global.round.value).toBe("8px");
  });
});
