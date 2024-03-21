export const sum = (a, b) => a+b;
export const mul = (a, b) => a*b;
export const g = 9.8;
export const PI = 3.14;//export used for import

// module.exports = {
//     sum: sum,
//     mul: mul,
//     PI: PI,
//     g: g,
// };

//used to export value to other files(a special object)
//when information of this file is required in another file(script.js) then..
//..module.exports is used in source file and require(path of source file) in..
//..destination file.

