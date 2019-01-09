//A simple example of recursion
function factorial(n) { //A javascript function to calculate the factorial of a number using recursion
	// body...
	if (n<=0) {
		return 0;
	}
	else if (n===1) {
		return 1;
	}
	else {
		return n * factorial(n-1);
	}
}

console.log(factorial(4));