'use strict';

const array = () => {
  const arr = [];
  const search = i => arr[i];
  search.push = (v) => arr.push(v);
  search.pop = () => arr.pop();

  return search;
};

module.exports = { array };
