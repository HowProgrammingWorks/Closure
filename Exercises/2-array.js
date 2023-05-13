'use strict';

const array = () => {
  const data = [];
  const get = (x) => data[x];
  get.push = (item) => data.push(item);
  get.pop = () => data.pop();

  return get;
};

module.exports = { array };
