'use strict';

const array = () => {
  const arr = [];
  const f = i => arr[i];
  f.push = value => Array.prototype.push.call(arr, value);
  f.pop = () => Array.prototype.pop.call(arr);
  return f;
};


const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');
console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third
console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop());

module.exports = { array };
