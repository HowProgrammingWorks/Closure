'use strict';

const seq = (f) => (arg) => {
    if (typeof arg === 'number') {
      return f(arg);
    } else {
      return seq((x) => f(arg(x)));
    }
  };
  
module.exports = { seq };
