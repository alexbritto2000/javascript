console.log('Array sorting without function');
var arr = [3, 2, 45, 24, 34, 16, 26, 8, 73];
let len = arr.length;
for (let i = 0; i < len; i++) {
  for (let j = i + 1; j < len; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
}
console.log(arr);

console.log('---------------------------');
console.log('Array sorting with function');
var arr = [3, 2, 45];
let arr1 = arr.sort();
console.log(arr1);
console.log('----------------------------');
var app = navigator.appName;
console.log(app);


console.log('-----------------------------');
console.log('pattern using for loop');
function pattern(range) {
  for (var i = 1; i <= range; i++) {
    //console.log(i);
    var str = '';
    for (var j = 1; j <= i; j++) {
      str += j + ' ';
      //console.log(j);
    }
    console.log(str);
  }
}
pattern(3);


console.log('------------------------------');
console.log('Fibonacci series');
function fibonacci(max) {
  var n1 = 0;
  var n2 = 1;
  var count = 2;
  while (count < max) {
    var n = n1 + n2;
    console.log(n);
  }
  console.log('kjjk');
}
//fibonacci(7);
