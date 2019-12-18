'use strict';

const seq = f => g => (+g === g ? f(g) : x => seq(f)(seq(g)(x)));

module.exports = { seq };
