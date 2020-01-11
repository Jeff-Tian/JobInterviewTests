export const search = (nums: number[], target: number): number => {
  console.log('search ', target, ' in ', nums);
  if (nums.length === 0) return -1;
  if (nums.length === 1 && nums[0] !== target) return -1;

  if (nums[0] === target) return 0;
  if (nums[nums.length - 1] === target) return nums.length - 1;

  const index = Math.floor((nums.length - 1) / 2);
  const pivot = nums[index];
  if (pivot === target) return index;

  const searchInLeft = () => search(nums.slice(0, index), target);
  const searchInRight = () => {
    let found = search(nums.slice(index + 1), target);
    return found >= 0 ? index + 1 + found : found;
  };

  if (target < pivot) {
    if (pivot < nums[0] || nums[0] < target) {
      return searchInLeft();
    }
    return searchInRight();
  } else {
    if (pivot < nums[0]) {
      if (target < nums[0]) {
        return searchInRight();
      } else {
        return searchInLeft();
      }
    }

    return searchInRight();
  }
};
