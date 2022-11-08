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

// APPROACH 2 :

// TIME COMPLEXITY  => O(n²) (NESTED LOOPS)
// SPACE COMPLEXITY => O(1)

const getSpiralOrder = function (matrix) {
  if (!matrix.length) return [];

  const res = [];
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (colStart <= colEnd && rowStart <= rowEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      res.push(matrix[rowStart][i]);
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      res.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        res.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        res.push(matrix[i][colStart]);
      }
    }
    colStart++;
  }
  return res;
};

console.log(
  getSpiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1,2,3,6,9,8,7,4,5]

console.log(getSpiralOrder([[7], [9], [6]])); // [7,9,6]
