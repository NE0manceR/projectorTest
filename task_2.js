const invert = (obj) => {
	let newArr = Object.entries(obj).reverse(); // получем массив ключ значение
	let newObj = {}; // новый пустой объект
	newArr.forEach((el, index) => {
		newObj[el[1]] = el[0]; // добавляем ключ и значение
	});
};

invert({ a: "some", b: "object", c: 1 });

// { 'some': 'a', 'object': 'b', '1': 'c' }
