'use strict';

const seq = (f) => (g) => (typeof g === 'number' ? f(g) : seq((x) => f(g(x))));

console.log(seq((x) => x * 2)((x) => x + 7)(5));

module.exports = { seq };
