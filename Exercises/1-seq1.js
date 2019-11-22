'use strict';

const seq = firstArg => {
  const arr = [];
  const chain = arg => {
    const type = typeof arg;
    if (type === 'function') {
      arr.push(arg);
      return chain;
    } else if (type === 'number' && arr.length > 0) {
      return arr.reverse().reduce((val, fn) => fn(val), arg);
    } 
  };
  return chain(firstArg);
};

module.exports = { seq };
