const groupBy = (array, func) => {
	let object = {};

	array.forEach((element) => {
		object[`${func(element).toString()}`] = [];
	});

	array.forEach((el) => {
		if (func(el).toString() in object) {
			object[`${func(el).toString()}`].push(el);
		}
	});
	console.log(object);
};

groupBy([3.6, 3.7,3.5, 6.4, 8.9], Math.floor);
// { '3': [3.6, 3.7], '6': [6.4], '8': [8.9] }
