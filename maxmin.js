// Simple javascript code to find the larger of two numbers
function max(num1, num2) {
	// body...
	if (num1 > num2) {
		console.log("The greater number is " + num1);
	}
	else if (num2 > num1) {
		console.log("The greater number is " + num2);
	}
	else {
		console.log("Both numbers are equal");
	}
}

max(10,10);