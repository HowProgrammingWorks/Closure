'use strict';

// const seq = (x) => {
//   const fns = [x];
//   return function add(y) {
//     if ('number' === typeof y) {
//       let arg = y;
//       fns.forEach(f => arg = f(arg));
//       return arg;
//     }
//     fns.unshift(y)
//     return add;
//   }
// };

const seq = (f) => (g) => (typeof g === 'number' ? f(g) : seq((x) => f(g(x))));

module.exports = { seq };
