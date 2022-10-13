'use strict';


const seq = (f) => (g) => (
  typeof g === 'function' ? seq((x) => f(g(x))) : f(g)
);

module.exports = { seq };
