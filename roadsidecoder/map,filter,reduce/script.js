// what is map()
//used for creating new array from existing one by applying function each one of the array element

const nums = [1, 2, 3, 4];
const multiplyThree = nums.map((num, i, arr) => {
  //1. each one of the array item
  //2. index
  //3. actual array
  return num * 3;
});
console.log(multiplyThree);
//output --> [3,6,9,12]

// what is filter()
// filter method take each element within array and it applies condition statement against it.. if the condition return true it will push into output array.. if the condition is not return true it doesn't push into the array
const filterNums = [1, 2, 3, 4];
const moreThanTwo = nums.filter((num, i) => {
  return num > 2;
});
console.log(moreThanTwo);
console.log(Array.prototype);

// what is reduce()
// reduces an array of value down to one value
const sumReduce = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr, i, arr) => {
  // acc --> Accumalator is the result of the previous computation
  // curr --> current element of the array
  // i --> index
  // arr --> Actual array
  return acc + curr;
  // first iterate accumalator doesn't have value so it takes first element of array as value for accumalator
}, 0);
//0 is initial value
console.log(sum);

//PolyFill for map()
Array.prototype.myMap = function (cb) {
  let temp = [];
  // myArrayMap.myMap here myMap is a part of myArrayMap.. if we use this inside myMap its gonna reference of parent array
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
    // cb(this[i], i, this) here cb is function we getting function as a param so its called cb
  }

  return temp;
};

myArrayMap = [3, 6, 4, 2];
newMyArray = myArrayMap.myMap((item, i, arr) => {
  return item * 3;
});
console.log(newMyArray);
