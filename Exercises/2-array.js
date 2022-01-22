'use strict';

const array = () => {
	const result = [];
	const get = item => result[item];
	get.push = elem => result.push(elem);
	get.pop = () => result.pop();
	return get;
};

module.exports = { array };
