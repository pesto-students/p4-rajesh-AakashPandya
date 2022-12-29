function sort(nums) {
  let low = 0,
    high = nums.length - 1;

  for (let i = 0; i <= high; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[low]] = [nums[low], nums[i]];
      low++;
    } else if (nums[i] == 2) {
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--;
      i--;
    }
  }
}

let nums1 = [0, 2, 1, 2, 0];
sort(nums1);
console.log(nums1); // [0,0,1,2,2]

// Time Complexity: O(N)
// Expected Auxiliary Space: O(1)
