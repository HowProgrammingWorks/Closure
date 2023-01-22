'use strict';

const array = () => {
  const arr = [];
  const callback = (index) => arr[index];
  callback.push = (value) => arr.push(value);
  callback.pop = () => arr.pop();
  return callback;
};

module.exports = { array };
