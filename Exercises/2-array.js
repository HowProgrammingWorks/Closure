'use strict';

const array = () => {
  const elements = [];
  const get = i => elements[i];
  get.push = x => elements.push(x);
  get.pop = () => elements.pop();
  return get;
};

module.exports = { array };
