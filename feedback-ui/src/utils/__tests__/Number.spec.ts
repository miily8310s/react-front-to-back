import { getNumberArray } from "../NumberUtils";

describe("NumberUtils", () => {
  test("getNumberArray", () => {
    expect(getNumberArray(3)).toStrictEqual([1, 2, 3]);
    expect(getNumberArray(10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
