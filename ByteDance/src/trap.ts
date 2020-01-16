export const trap = (height: number[]) => {
  const maxWidth = height.length;

  if (maxWidth <= 0) {
    return 0;
  }

  let left = 0;
  let right = maxWidth - 1;
  let ans = 0;

  let leftMaxHeight = height[left];
  let rightMaxHeight = height[right];

  while (left <= right) {
    leftMaxHeight = Math.max(leftMaxHeight, height[left]);
    rightMaxHeight = Math.max(rightMaxHeight, height[right]);

    if (leftMaxHeight < rightMaxHeight) {
      ans += leftMaxHeight - height[left];
      left++;
    } else {
      ans += rightMaxHeight - height[right];
      right--;
    }
  }

  return ans;
};
