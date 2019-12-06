'use strict';

const seq = (...f) => a => (!isNaN(a) ?
  f.reduce((v, fn) => fn(v), a) :
  seq(a, ...f));

module.exports = { seq };
