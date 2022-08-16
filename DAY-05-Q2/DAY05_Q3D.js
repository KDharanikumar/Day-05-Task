// 3. Do the Below Programs in Arrow Functions.
// D. Return all the Prime Numbers in an Array

const array = [1, 2, 3, 4, 5, 6, 7, 8,9, 10];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};


const myPrimeArray = array.filter(element => isPrime(element));
console.log(myPrimeArray);