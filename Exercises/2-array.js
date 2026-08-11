'use strict';

const array = () => {
  const arr = [];
  const a = (index) => arr[index];
  a.push = (value) => arr.push(value);
  a.pop = () => arr.pop();
  return a;
};

module.exports = { array };
