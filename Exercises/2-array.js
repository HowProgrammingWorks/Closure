'use strict';

const array = () => {
  const data = [];
  const get = (i) => data[i];
  get.push = (x) => data.push(x);
  get.pop = () => data.pop();
  return get;
};

module.exports = { array };
