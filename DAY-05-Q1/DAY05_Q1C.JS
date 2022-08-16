// QUES : 1.Do the Below Programs in anonymous Function & IIFE
// C. Sum of all Numbers in an Array

var arr = [3, 6, 1, 5, 8];
add = function (arr) {
  return arr.reduce((a, b) => a + b, 0);
};

var sum = add(arr);
console.log(sum);
