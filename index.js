// Cannot read properties of undefined (reading '0') in JS

// EXAMPLE 1 - Provide a fallback value when the variable is `undefined`

const fromDb = undefined;

// ✅ fallback value of an empty array
const employees = fromDb || [];

const firstEmp = employees[0];
console.log(firstEmp); // 👉️ undefined

// --------------------------------------

// ✅ fallback value of an empty string

const emps = fromDb || '';

const first = emps[0];
console.log(first); // 👉️ undefined

// ------------------------------------------------------------------

// // EXAMPLE 2 - Make sure the variable has been initialized

// let arr = ['bobby', 'hadz', 'com'];

// console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]

// console.log(arr[0]); // 👉️ bobby

// // ------------------------------------------------

// let str = 'abc';

// console.log(str); // 👉️ abc

// console.log(str[0]); // 👉️ a

// ------------------------------------------------------------------

// // EXAMPLE 3 - Solve the error when working with nested arrays

// const arr = [
//   ['a', 'b'],
//   ['c', 'd'],
// ];

// console.log(arr?.[0]); // 👉️ ['a', 'b']
// console.log(arr?.[0]?.[0]); // 👉️ a
// console.log(arr?.[0]?.[0]?.[1]); // 👉️ undefined
// console.log(arr?.[0]?.[1]?.[0]?.[0]); // 👉️ b

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if the value is of the correct type before accessing it at an index

// // ✅ check if a variable stores an array
// const arr = undefined;

// if (Array.isArray(arr)) {
//   const first = arr[0];
//   console.log(first);
// } else {
//   // 👇️ this runs
//   console.log('The value is NOT an array');
// }

// // ----------------------------------------------

// // ✅ check if a variable stores a string

// const str = undefined;

// if (typeof str === 'string') {
//   const first = str[0];
//   console.log(first);
// } else {
//   // 👇️ this runs
//   console.log('The value is NOT a string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Use the ternary operator to solve the error

// // ✅ with arrays
// const arr = undefined;

// const result1 = Array.isArray(arr) ? arr[0] : '';
// console.dir(result1); // 👉️ ""

// // -------------------------------------------

// // ✅ with strings

// const str = undefined;

// const result2 = typeof str === 'string' ? str[0] : '';
// console.dir(result2); // 👉️ ""
