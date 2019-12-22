'use strict';

const array = () => {
  const a = [];
  const m = i => a[i];
  const push = obj => a.push(obj);
  const pop = () => a.pop();
  Object.assign(m, { push, pop });
  return m;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');
console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 
console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop());

module.exports = { array };
