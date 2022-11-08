// Find Next Greatest Element

const Stack = () => {
  const items = [];

  return {
    push: (data) => {
      items.push(data);
    },
    pop: () => {
      return items.pop();
    },
    peek: () => {
      return items[items.length - 1];
    },
    isEmpty: () => items.length === 0,
  };
};

const findNextGreaterElement = (arr) => {
  const result = [];
  const stack = Stack();

  for (let i = arr.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.peek() < arr[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      result.unshift(-1);
    } else {
      result.unshift(stack.peek());
    }
    stack.push(arr[i]);
  }

  console.log(result);
};

findNextGreaterElement([1, 3, 2, 4]); // [ 3, 4, 4, -1 ]
findNextGreaterElement([6, 8, 0, 1, 3]); // [ 8, -1, 1, 3, -1 ]
