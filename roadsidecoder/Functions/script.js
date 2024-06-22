//1. FUnction expression

//1. Function Expression
//Anonymous function we can assign to varaiable
const square = function (num) {
  return num * num;
};

console.log(square(5));

/*
It has no name so its calles anonymus function 
function (num) {
    return num * num;
} */

//2. FIRST CLASS FUNCTION
//first class function means where a function can be treated like a variable its called first class function

function square1(num) {
  return num * num;
}

function displaysquare(fn) {
  console.log("Square is: " + fn(5));
}

displaysquare(square1);

// Q4 - What is IIFE? Immediately invoked function expressions
(function square(num) {
  console.log(num * num, "IIFE");
})(5);

(function (x) {
  return (function (y) {
    console.log(x, "x");
    //in the parent scope x exist so 1 will return because of closure
    //Closeue: closure gives you access to an outer function's scope from an inner function.
    //function close ah irukra variable oda values kidaikrathu
  })(2);
})(1);

//Function scope - O/P based
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
//output: 5 5 5 5 5
//Javascript's var keyword has function scope, which means there is only one variable i that is shared among all iterations of the loop. By the time the setTimeout callbacks execute, the loop has finished and i has the final value of 5.

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
//output: 1 2 3 4 5
//However, when you use let, it has block scope, which means a new variable i is created for each iteration of the loop, preserving its value at each iteration.

// Q5: Params and arguments
function square2(num) {
  //Params (receive those values inside of function)
  console.log(num * num);
}

square2(5); //Arguments (values pass inside of function)

// Q6: Spread operator
function multiply(...nums) {
  console.log(nums);
}

var arr = [5, 6];
multiply(...arr);

// Q7: FUnction hoisting
var hoistX = 20;

function fun() {
  console.log(hoistX, "FUnction hoisting");
  var hoistX = 21;
}

fun();

//Q8: Spread operator o/p quiz
const spreadfn = (a, x, y, ...numbers) => {
  //(a, x, ...numbers, y) --> this is not possible. when we use rest operator or spread operator it should always be the last one

  console.log(x, y, numbers, "Spread operator o/p quiz");
};

spreadfn(5, 6, 7, 8);

//Q9: CallBack function --> A callback function in JavaScript is a function that is passed into another function as an argument to be executed later

//Q10 --> Arrow Function
//Arrow Function vs Regular Function

//1. SYNTAX
function normalSuare(num) {
  return num * num;
}

const arrowSquare = (num) => {
  return num * num;
};

//2. Implicit "return" keyword
const normalSuareFun = (num) => num * num;
//With arrow functions, if the function body consists of a single expression, you can omit the curly braces {} and the return keyword. This is known as an implicit return.

//num * num is the single expression.

//Explicit Return: You use the return keyword to specify the value to return.
//Implicit Return: For single-expression arrow functions, the result of the expression is returned automatically, without using the return keyword.


//3. arguments
function argumentFn() {
  console.log(arguments, arguments[0]);
}

argumentFn(863,2,35);


const argumentArrowFn =()=>{
  console.log(arguments);
}

argumentArrowFn(863, 2, 35);