function abc() {
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

fun()

