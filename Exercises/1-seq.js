'use strict';

const seq = (...f) => a => (typeof a === 'number' ?
  f.reduce((v, fn) => fn(v), a) :
  seq(a, ...f));

module.exports = { seq };
