const checkParentheses = (str) => {
	let newStr = str.split("");
	newStr.forEach((element, index) => {
		// проверить или есть такой элемент
		if (element === "[") {
			// проверить или этот элемент не последний в массиве - если последний то  у нас false
			if (newStr[newStr.length - 1] === "[") {
				console.log(false);

				return;
			}

			//  проверить наличие второй скобки
			for (let i = index; i < newStr.length; i++) {
				if (newStr[i] === "]") {
					console.log(true);

					return;
				} 
			}
		}
		//======================= проверка круглой скобки==================
		if (element === "(") {
			// проверить или этот элемент не последний в массиве - если последний то  у нас false
			if (newStr[newStr.length - 1] === "(") {
				console.log(false);

				return;
			}

			//  проверить наличие второй скобки
			for (let i = index; i < newStr.length; i++) {
				if (newStr[i] === ")") {
					console.log(true);

					return;
				} 
			}
		}

		// =================проверка фигурной скобки================================
		if (element === "{") {
			// проверить или этот элемент не последний в массиве - если последний то  у нас false
			if (newStr[newStr.length - 1] === "{") {
				console.log(false);

				return;
			}

			//  проверить наличие второй скобки
			for (let i = index; i < newStr.length; i++) {
				if (newStr[i] === "}") {
					console.log(true);

					return;
				} 
			}
		}
	});

};

// checkParentheses("-a]--["); // false
checkParentheses("--()--"); // true
// checkParentheses("dsa{vsfs{ad"); // false
// checkParentheses("j78g5b]u[yg"); // false
// checkParentheses(",m{i987y}hj"); // true
// checkParentheses("dsa[3ed---:]::"); // true
