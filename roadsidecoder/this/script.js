//this keyword in javascript (Implicit binding)
//Explain 'this' keyword?
//"use strict";
//Fruits are kept in this bucket
//In js this keyword is used to reference something like an object
//Functions are first class object

this.a = 5;
console.log(this, "window object");

function getParam() {
  console.log(this.a);
  //1. Parent for this function is window object
  //2. If it is inside object means parent will be that object so this will refer that object
}
getParam();

// Arrow function will take outer normal function
let user = {
  name: "Alex britto",
  age: 24,
  getUserDetails() {
    console.log(this);
  },
  //3. Here getUserDetails() inside of object so this keyword it will point to user obj

  childObj: {
    newName: "passionMatter",
    childObjDetails() {
      console.log("New name is: " + this.newName + "old name: " + this.name);
      //4. Here this.name will be undefined because its pointing immediate parent childObj so childObj members will accessible
    },
  },
};

user.getUserDetails();
user.childObj.childObjDetails();

// 5(1) Arrow function inside normal function
let course1 = {
  courseName: "Python",
  fee: 4000,
  getCourse() {
    const nestedArrow = () => {
      console.log(this);
      // 1. nestedArrow() function this keyword takes value from parent getCourse() function so it contains course obj
    };
    nestedArrow();
  },
};

course1.getCourse();

// 5(2) Arrow function inside obj
let course2 = {
  courseName: "Angular",
  fee: 4000,
  nestedArrow: () => {
      console.log(this);
      // 1. nestedArrow() function this keyword takes value from parent function here no outer function so its getting window object
    }
};

course2.nestedArrow();

// Interview Question - 1
const quiz1 = {
    firstName: 'Alex',
    printFirstName() {
        const firstName = 'Britto';
        console.log(this.firstName)
    }
}

quiz1.printFirstName(); // what is logged?

// Interview Question - 2
function makeUser() {
    return{
        name: 'Alex',
        ref: this
        // 1. Here it will point parent. no parent so it will point window obj
        // 2. ref() { 
        //  return this
        //} if we change likewise it will fix
    }
}

let quiz2 = makeUser(); // what is the result
console.log(quiz2.ref.name,'quiz2')
//In window obj there is no name so will print empty

// Interview Question - 3
let calculator = {
    read() {
        this.a = +prompt('a= ',0)
        // 1. +for converting to integer
        this.b = +prompt('b=',0)
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
}

calculator.read()
console.log(calculator) 
console.log(calculator.sum())
console.log(calculator.mul())

// Interview Question - 4
var length = 4;

function callback() {
    console.log(this.length)
}

const object4 = {
    length: 5,
    method(fn) {
        fn();
    }
}

object4.method(callback);

/* "use strict";

var length = 4;

function callback() {
    console.log(this.length);
}

const object4 = {
    length: 5,
    method(fn) {
        fn.call(this); // Explicitly set `this` to `object4`
    }
}

object4.method(callback); // Output: 5 */