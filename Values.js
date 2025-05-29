// Values.js

const prompt = require('prompt-sync')();

let left_operand =  Number(prompt(`Enter the left operand? `));
let right_operand =   Number(prompt(`Enter the right operand? `));
let operator = 	prompt(`Enter the operator you want to use  "+. Addition, -. Subtraction, *. Multiplication, /. Division"   `);

let ans = 0

switch(operator) {

	case '+' : 
	ans = left_operand + right_operand
	console.log(ans)
	break
	
	case '-' :
	ans = right_operand - left_operand 
	console.log(ans)
	break
	
	case '*' :
	ans = left_operand * right_operand
	console.log(ans)
	break
	
	case '/' :
	ans = left_operand / right_operand
	console.log(ans)
	break
	
	default:
	ans = 'NaN'
	console.log(ans)
	break
}


