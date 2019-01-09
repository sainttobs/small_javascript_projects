/* A simple javascript program(function) to check if a number is even or add */
function evenOdd(num){ //the name of the function is evenOdd. A variable *num* is passeed to the function.
	//The variable num represents the number we want to check 
	if (num%2==0) {// The % sign stands for modulus.
		//if the modulus of the number is 0, the condition is true
		console.log('The number is even'); //if the condition is true then the number is even
	}
	else{
		console.log('The number is odd'); //else the number is odd
	}
}

evenOdd(12); //the number is even. A number is passed into the function to run it.