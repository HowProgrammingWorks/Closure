'use strict';

const array = () => {
  const arr = [];
  const fn = i => arr[i];
  fn.push = x => arr.push(x);
  fn.pop = () => arr.pop();
  return fn;
};

module.exports = { array };
