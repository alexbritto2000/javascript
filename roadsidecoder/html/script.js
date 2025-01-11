/* function abc() {
  console.log(a, b, c);

  var a = 10;
  const c = 20;
  let b = 20;
  //here c &b will initialize in temporary dead zone
}

abc();


// 1. Function Hoisting
var x = 21;

var fun = function() {
  console.log(x);
  // var x will be declare for function local scope so the output will be undefined
  var x = 20;
}

fun() */

// Closure
// Outer scope values can access inside inner scope
//In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
/* function outer(name) {
  let outerVariable = "Outer variable";
  console.log(outerVariable);
  console.log(name);

  function inner() {
    let innerVar = "Inner varaible";
    console.log(innerVar);
    console.log(outerVariable);

    console.log("Hi " + name + " How are u?");
  }
  return inner;
}

let innerFun = outer("Alex");
innerFun();

let innerFun2 = outer("Britto");
innerFun2();

let innerFun3 = outer("Arish");
innerFun3();

innerFun(); */


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

function mark0(grid,i,j){
    //console.log(i,j)
    let rowLength = grid.length;
    let columnLength = grid[0].length
    
    if(i < 0 || j < 0) {
        return
    }
    if(rowLength <= i || columnLength <= j) {
        //console.log('Hello', i, j)
        return
    }
    
    if(grid[i][j] == '0') {
        return
    }
    //console.log('Hello')
    grid[i][j] = '0';
    
    mark0(grid, i-1, j)
    mark0(grid, i+1, j)
    mark0(grid, i, j+1)
    mark0(grid, i, j-1)
}

var numIslands = function(grid) {
    //console.log(grid.length)
    
    let count =0;
    let rowLength = grid.length;
    let columnLength = grid[0].length
    
    for(let i=0; i<rowLength; i++) {
        for(let j=0; j<columnLength; j++) {
            //console.log(grid[i][j])
            if(grid[i][j] == '1') {
                //console.log('Hi')
                count++;
                mark0(grid,i,j)
            }
            //console.log(grid)
        }
    }
    
    return count
};

numIslands(grid)
