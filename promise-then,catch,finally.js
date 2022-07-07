var x = new Promise((resolve,reject)=>{
  console.log("testing");
  setTimeout(() => reject(2*2),1000);
})
.then(x => {
  console.log(x);
  return new Promise((resolve,reject) =>{
    setTimeout(()=> resolve(x * 2),1000);
  })
})
.then(x => {
  console.log(x);
  return new Promise((resolve,reject) =>{
    setTimeout(()=> resolve(x * 2),1000);
  })
})
.then(x => {
  console.log(x);
  return new Promise((resolve,reject) =>{
    setTimeout(()=> resolve(x * 2),1000);
  })
})
.catch(x=>console.log("error",x))
.finally(()=>console.log("finally"));
//then,catch,finally prototype methods
