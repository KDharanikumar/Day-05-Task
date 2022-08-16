
// B. Convert all the Strings to Title Caps in a String Array

function titleCase(str) {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
console.log(titleCase("hai i am chitti"));