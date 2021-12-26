/**
 * @param {number} arrayLength 配列の長さ
 * @returns 指定した長さの配列数の配列
 * @example getNumberArray(5) => [1, 2, 3, 4, 5]
 */
export const getNumberArray = (arrayLength: number) => {
  return new Array<number>(arrayLength).fill(0).map((_item, i) => i + 1);
};
