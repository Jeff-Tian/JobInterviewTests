export const findKthLargest = (array: number[], k: number) => {
  return array.sort((x, y) => x - y).reverse()[k - 1];
};
