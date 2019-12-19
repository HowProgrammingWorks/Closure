'use strict';

const array = () => {
  const arr = [];
  const f = i => arr[i];
  f.push = value => Array.prototype.push.call(arr, value);
  f.pop = () => Array.prototype.pop.call(arr);
  return f;
};

module.exports = { array };
