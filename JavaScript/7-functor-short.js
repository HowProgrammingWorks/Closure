'use strict';

const add = (x) => {
  const f = (y) => add(x + y);
  f.map = (fn) => fn(x);
  return f;
};

// Usage

add(2)(7)(1).map(console.log);
