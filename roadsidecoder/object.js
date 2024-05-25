//1. Modify and delete
var user = {
  name: "Alex Britto",
  age: 24,
};
user.name = "britto";
delete user.name;
console.log(user);
user = {
  degree: "b.tech",
};
delete user;
//delete a variable using delete doesn't actually delete the variable.
console.log(user);

//2. Delete on local variable
const fun = (function (a) {
  delete a;
  //delete keyword is only used when we want to delete properties from an object.. so its not affect a at all and its going to return 5
  return a;
})(5);
console.log(fun);

//3. String key in object
const user3 = {
  name: "Roadside coder",
  age: 24,
  "like this video": true,
};
console.log(user3);
console.log(user3["like this video"]);
//Like that we can access
delete user3["like this video"];
//it will work
console.log(user3);

//4. Dynamic key value pair in object
const property = "firstname";
const name = "Alex Britto";

const user4 = {
  [property]: name,
};
console.log(user4);

//5. loop in object
const user5 = {
  name: "Alex Britto",
  age: 24,
  isTotallyAwsome: true,
};

for (key in user5) {
  console.log(key); //key name
  console.log(user5[key]); //key value
}

//Interview Questions - 1
const nums = {
  a: 100,
  b: 105,
  title: "my nums",
};
multiplyByTwo(nums);
function multiplyByTwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}
console.log(nums);

// Interview quiz - 2
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
//here a[{key:"b"}] = 123; its not possible so it will a[object object]=123;
a[c] = 56;
//here also a[{key:"c"}] = 56; its not possible so it will a[object object]=56;
console.log(a);

// JSON.stringify vs JSON.parse
// 1. JSON.stringify used to convert obj to string
// 2. JSON.parse used to convert stringify to object
const jsonuser = {
  name: "Alex britto",
  age: 24,
};
const strObj = JSON.stringify(jsonuser);
console.log(typeof strObj);
//In local storage we will convert to string and we will save
const objObj = JSON.parse(strObj);
console.log(typeof objObj);

console.log([..."alex"]);
const userJson = { name: "alex", age: 24 };
const admin = { admin: true, ...userJson };
console.log(admin)
