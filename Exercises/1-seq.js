'use strict';

const seq = f => g => x => (typeof x === 'number' ? f(g(x)) : seq(i => f(g(i)))(x));

module.exports = { seq };
