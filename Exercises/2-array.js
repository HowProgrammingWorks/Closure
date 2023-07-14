'use strict';

const array = () => {
  const data = [];
  const obj = (index) => data[index];

  obj.push = (value) => data.push(value);
  obj.pop = () => data.pop();

  return obj;
};

module.exports = { array };
