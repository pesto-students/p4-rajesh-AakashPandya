// TIME COMPLEXITY: O(N^2)
// SPACE COMPLEXITY: O(1)
const getClosestSumOfThreeIntegers = (nums, target) => {
  let closest = 0;
  let minDiff = Infinity;

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let diff = Math.abs(sum - target);
      if (diff < minDiff) {
        minDiff = diff;
        closest = sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closest;
};

console.log(getClosestSumOfThreeIntegers([-1, 2, 1, -4], 1)); // 2
console.log(getClosestSumOfThreeIntegers([-1, 2, 1, 2], 4)); // 3
