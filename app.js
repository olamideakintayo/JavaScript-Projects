/*
function addNumbers() {
    let input1 = prompt("Enter the first number:");
    let input2 = prompt("Enter the second number:");
    
    let num1 = Number(input1);
    let num2 = Number(input2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
    } else {
        let sum = num1 + num2;
        alert("The sum is: " + sum);
    }
}

addNumbers();
*/

// const number = 2;
// console.log(number)
// number = 6;
// console.log(number);




/* const person = {
	name : "Chinedu",
	age : 17,
	gender : "sheMale",
	password : "34567"
};

person.color = "black";
person.password = "newpassword1234";

console.log(Object.entries(person));
*/


/* let array = [2, 3, 4, 5, 6, 7, 8]

let obj = {
	color: "blue",
	age: 12,
	isValid: true
};

for(let key in obj) {
	console.log(obj[key])
	
}

for(let index of array) {
	console.log(index)
	}
	
*/
	
//function greet(){
//	let reply = "Hello World"
//	return reply
//};

/* let userName = "Ugbo";
let number = 12;

const greet = function(numberOne, name){
	let concat = numberOne + " " + name
	return concat
	}

console.log(greet(number, userName));
*/

/* let numberOne = 3;
let numberTwo = 2;

function getAnswer(number, secondNumber) {
	let numberThree = 4;
	
	function multiply() {
	 let result = secondNumber * number * numberThree
	 return result
	 };
	 return multiply()
};

let finalResult = getAnswer(numberOne, numberTwo)

console.log(finalResult)
*/


/* const signUp =()=> {
	console.log("Registration is successful")
}

signUp();
*/


/*let arrayOfNumbers = [2, 3, 5, 6, 7];
const printNumbers=(array)=> {
 for(let number of array) {
   console.log(number)
  }
 }
 
 printNumbers(arrayOfNumbers)
 */
 
 const obj = {
 	a: 1,
 	b: 2,
 	sum() {
 		return this.a + this.b;
 	}
 	};
 	
 	const result = obj.sum.bind(obj);
 	console.log(result())