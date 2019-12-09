'use strict';

const seq = fn => arg => {
  if (typeof arg === 'number') return fn(arg);
  return seq(x => fn(arg(x)));
};

module.exports = { seq };
