'use strict';

const seq = x => {
  const arr = [];
  const fn = arg => {
    if (typeof arg === 'function') return (arr.unshift(arg), fn);
    return arr.reduce((v, f) => f(v), arg);
  };
  return fn(x);
};

module.exports = { seq };
