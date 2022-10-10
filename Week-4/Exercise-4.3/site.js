const Fibonacci = (number) => {
  return {
    [Symbol.iterator]: () => {
      let currentNumber = 0,
        nextNumber = 1,
        sum;
      let currentIndex = 0;
      return {
        next: () => {
          if (currentIndex < number) {
            currentIndex++;
            sum = currentNumber + nextNumber;
            currentNumber = nextNumber;
            nextNumber = sum;
            return { value: currentNumber, done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
};

console.log([...Fibonacci(12)]); // [1,1,2,3,5,8,13,21,34,55,89,144]
