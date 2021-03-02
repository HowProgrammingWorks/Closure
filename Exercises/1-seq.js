'use strict';


const seq = (f) => (g) => (
  typeof g !== 'number' ? seq((n) => f(g(n))) : f(g)
);


module.exports = { seq };
