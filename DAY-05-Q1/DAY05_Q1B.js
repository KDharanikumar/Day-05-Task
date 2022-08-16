// QUES : 1.Do the Below Programs in anonymous Function & IIFE
// B. Convert all the Strings to Title Caps in a String Array

function abc(st) {
  return st
    .split(" ")
    .reduce(
      (annfun, iifefun) =>
        annfun + (iifefun.charAt(0).toUpperCase() + iifefun.slice(1) + " "),
      " "
    );
}
console.log(abc("This is sample output"));
