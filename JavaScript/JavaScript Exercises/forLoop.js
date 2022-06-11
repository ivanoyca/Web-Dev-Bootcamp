//?-------------- For Loops --------------
//*-------------- FizzBuzz For ------------------
output = []

for (n = 1; n <= 100; n++) {
	if (n % 3 === 0 && n % 5 === 0) {
		output.push("FizzBuzz")
	} else if (n % 3 === 0) {
		output.push("Fizz")
	} else if (n % 5 === 0) {
		output.push("Buzz")
	} else {
		output.push(n)
	}
}
console.log(output);

//*-------------- Fibonacci Series Generator ------------------
function fibonacciGenerator(n) {
	let output = []
	let n1 = 0
	let n2 = 1
	let cnt = 0

	if (n === 1) {
		output.push(n1)
	} else if (n === 2) {
		output.push(n1, n2)
	} else {
		output.push(n1, n2)
		for (cnt = 3; cnt <= n; cnt++) {
			let n3 = n1 + n2
			output.push(n3)
			n1 = n2
			n2 = n3
		}
	}
	return output
}