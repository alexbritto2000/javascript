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
    setTimeout(function() {
        console.log(i)
    }, i*1000)
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
function square2(num) { //params
  console.log(num*num)
}

square2(5); //Arguments

// Q6: Spread operator
function multiply(...nums) {
  console.log(nums)
}

var arr = [5,6];
multiply(...arr);
