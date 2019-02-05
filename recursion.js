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

// A simple program to find the sum of all numbers below an integer using recursion

console.log(factorial(4)); //24

function sum(n){
	if (n===0) {
		//console.log("We hit the case");
		return 0;
	}
	else{
		return n + sum(n-1);
	}
}

console.log(sum(10));