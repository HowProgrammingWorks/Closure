'use strict';

const seq = f => g => x => (typeof x === 'number' ?
  (typeof f === 'function' ? f(g(x)) : g(x)) : seq(f(g(x))));
module.exports = { seq };
