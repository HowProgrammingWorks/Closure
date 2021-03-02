'use strict';

const array = () => {
  const arr = [];

  const fn = (i) => arr[i];
  fn.pop = () => arr.pop();
  fn.push = (el) => arr.push(el);
  return fn;
};

module.exports = { array };
