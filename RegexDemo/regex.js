// const input = '+91-8106067236';
// console.log(/^(0|\+91-)?[7-9][0-9]{9}$/.test(input));

// if (input.match(new RegExp(/^(0|\+91-)?[7-9][0-9]{9}$/))) {
//   console.log(true);
// } else {
//   console.log(false);
// }

const input = 'cat looks beautiful';
console.log(/\bcat\b/.test(input));

console.log(/\Bcat\B/.test(input));
