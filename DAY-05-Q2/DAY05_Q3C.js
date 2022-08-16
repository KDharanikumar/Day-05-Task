// C. Sum of all Numbers in an Array

var num = [3, 6, 1, 5, 8];
add =  (num) => {
  return num.reduce((a, b) => a + b, 0);
};

var sum = add(num);
console.log(sum);
