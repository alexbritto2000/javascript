// Promises in javascript
// Synchronouse vs Asynchronous code

// Sync --> code will execute line by line
console.log('hi')
console.log('hello')
console.log('how are u?')

// Async code
console.log("hi2");
setTimeout(()=>{
 console.log("hello2");
},0)
console.log("how are u?2");
//Javascript is a single threaded language and it cannot excute this set timeout in parallel as our code being executed
// it will execute all sync code then its gonna execute setTimeout because setTimeout is part of web API's
// sync codes execution complete aana piragu tha async code athavathu setTimeout run aagum

//golden rule --> js executes synchronous code first then it will execute async code
