'use strict';

const array = () => {
  const arr = [];
  const func = i => arr[i];
  func.push = value =>  {
    arr.push(value);
  };
  func.pop = () => {
    const elem = arr.pop();
    return elem;
  }
  return func;
};

module.exports = { array };
