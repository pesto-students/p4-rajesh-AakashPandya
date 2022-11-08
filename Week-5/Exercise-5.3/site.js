const hasDuplicate = (array) => new Set(array).size !== array.length;

console.log(hasDuplicate([1, 2])); // false
console.log(hasDuplicate([1, 2, 1])); // true
