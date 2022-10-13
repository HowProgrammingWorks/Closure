'use strict';

const array = () => {
  const data = [];
  const arr = (i) => data[i];
  arr.push = (x) => data.push(x);
  arr.pop = () => data.pop();
  return arr;
};

module.exports = { array };
