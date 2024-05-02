'use strict';

const array = () => {
  const someArray = [];
  const get = (x) => someArray[x];

  get.push = (x) => someArray.push(x);
  get.pop = () => someArray.pop();

  return get;
};

module.exports = { array };
