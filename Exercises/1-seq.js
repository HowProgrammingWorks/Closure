'use strict';

const seq = f => g => x => ((!isNaN(x)) ? f(g(x)) : seq(i => f(g(i)))(x));

module.exports = { seq };
