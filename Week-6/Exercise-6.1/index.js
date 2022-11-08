/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let sum = 0;
  let result = Number.MIN_SAFE_INTEGER;
  for (const num of nums) {
    sum += num;
    result = Math.max(result, sum);
    sum = sum < 0 ? 0 : sum;
  }
  return result;
};

console.log(maxSubArray([1, 2, 3, 4, -10])); // 10

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
