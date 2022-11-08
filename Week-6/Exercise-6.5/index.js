const isPairWithGivenDifferenceExist = function (nums, k) {
  const set = new Set(nums);

  for (const i in nums) {
    if (set.has(nums[i] - k)) {
      return true;
    }
  }

  return false;
};

console.log(isPairWithGivenDifferenceExist([5, 10, 3, 2, 50, 80], 78)); //true
console.log(isPairWithGivenDifferenceExist([-10, 20], 30)); // true
console.log(isPairWithGivenDifferenceExist([1, 3, 4, 9], 7)); // false
