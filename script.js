let a = +prompt ('число')

function func(arg) {
	if(arg < 2 ) return NaN;

	for (i = 2; i < arg; i++) {
		if (arg % i === 0) return true
	}

	return arg;
}

alert (func(a))