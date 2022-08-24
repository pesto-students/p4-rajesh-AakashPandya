// APPROACH 1 :

// TIME COMPLEXITY  => O(n²) (NESTED LOOPS)
// SPACE COMPLEXITY => O(1)

const spiralOrder = function (matrix) {
  const res = [];
  while (matrix.length) {
    res.push(...matrix.shift());

    for (const row of matrix) {
      if (row.length) {
        res.push(row.pop());
        row.reverse();
      }
    }

    matrix.reverse();
  }
  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1,2,3,6,9,8,7,4,5]

console.log(spiralOrder([[7], [9], [6]])); // [7,9,6]
