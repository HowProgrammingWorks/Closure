'use strict';

const array = () => {
  const arr = [];

  array.push = (value) => arr.push(value);
  array.pop = () => arr.pop();

  return (i) => arr[i];
};

module.exports = { array };
