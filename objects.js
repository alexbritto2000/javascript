var x = [];
var z = [1,2,3,4,5,6].forEach(a => x.push({name:'Name', age:a*2}))
//filter
var below8 = x.filter(a => a.age < 8);
var newbelow8 = below8.map(a=>{
  return {...a}
  //spread operator
});
//every
if(x.every(x => x.age > 10)){
  console.log('YES');
}else{  console.log('NO');  }
//some
if(x.some(x => x.age > 10)){
  console.log('YES');
}else{  console.log('NO');  }
//slice(shallow copy-ella placelaum update aagum)
var users = x.slice(1,3);
//splice
var people = x.splice(0,1,{name:'alex'});
console.log(people, 'splice');
console.log(users, 'slice');
newbelow8[0].age = 26;
console.log(x);
//console.log(z);
console.log(below8,'filter');
console.log(newbelow8,'map');
//reduce
var d = [1,2,3,45,6,4];
var total = d.reduce((acc,current) => acc+current);
console.log(total,'reduce');
//sort
var sort = d.sort((a,b) => a-b);
console.log('sorted:', sort);
//sort array
var sort1 = x.sort((a,b) => a.age-b.age);
console.log('sorted:', sort1);