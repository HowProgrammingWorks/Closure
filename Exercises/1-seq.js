'use strict';

const seq = f => g =>
  (typeof(g) === 'number' ? f(g) : seq(a => f(g(a))));

module.exports = { seq };
