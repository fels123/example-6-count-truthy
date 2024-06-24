//Falsy values in JS
// 0
//Null
//NaN
//''
//false
//undefined

const array = ["", 0, NaN, undefined, null, false, "John", 3, 8];
console.log(countTruthy(array));
function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
