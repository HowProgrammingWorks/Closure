'use strict';

const array = () => {
  const arr = [];
  const get = (i) => arr[i];
  get.push = (x) => arr.push(x);
  get.pop = () => arr.pop();
  return get;
};

const a = array();
a.push('first');
console.log(a(0));
console.log(a.pop());
console.log(a.pop());

module.exports = { array };
