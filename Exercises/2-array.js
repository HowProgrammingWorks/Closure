'use strict';

const array = () => {
    const value = [];
    const a = (index) => value[index];
    a.push = (x) => value.push(x);
    a.pop = () => value.pop();
    return a;
};

module.exports = { array };
