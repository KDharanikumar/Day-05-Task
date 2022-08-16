// QUES : 1.Do the Below Programs in anonymous Function & IIFE
// G. Remove Duplicates from an Array

var arr = ["chennai", "mumbai", "chennai", "delhi", "mumbai", "goa"];

function rd(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(rd(arr));
