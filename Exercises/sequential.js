'use strict';

const seq = f => g => {
  if (typeof(g) === 'function') return seq(a => f(g(a)));
  return f(g);
};

module.exports = { seq };
