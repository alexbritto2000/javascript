var number = 5;
for (var i = 0; i < number; i++) {
  let str = [];
  for (var j = 0; j < number; j++) {
    if (i == number / 2.5 || j == number / 2.5) {
      str += '*';
    } else {
      str += '-';
    }
  }
  console.log(str);
}
console.log('-----------------------');
var no = 6;
for (let i = 0; i < no; i++) {
  //console.log('*');
  let str1 = [];
  for (let j = 0; j < i; j++) {
    str1 += '*';
  }
  console.log(str1);
}
console.log('-----------------------');
