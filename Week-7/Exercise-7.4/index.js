// Parenthesis Checker

const map = new Map();
map.set("}", "{");
map.set(")", "(");
map.set("]", "[");

const isValid = (str) => {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (currentChar === "{" || currentChar === "(" || currentChar === "[") {
      arr.push(currentChar);
    } else if (arr[arr.length - 1] === map.get(currentChar)) {
      arr.pop();
    } else {
      return false;
    }
  }

  return arr.length === 0;
};

console.log(isValid("{([])}")); // true
console.log(isValid("()")); // true
console.log(isValid("([]")); // false
console.log(isValid("[()]{}{()()}")); // true
console.log(isValid("[(])")); // false
