let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodConatiner=document.getElementById('food-container')


inputBtn.addEventListener('click',()=>{
   
foodConatiner.innerHTML+=`<li class='food-items'>${inputFood.value}<li>`
  
   
})


// let id=document.getElementById('item')

// console.log(id);

// let classs=document.getElementsByClassName('food-items')

// console.log(classs);
// console.log(classs[1]);


// let li=document.getElementsByTagName('div')
// console.log(li);

// let tagName=document.getElementsByName('input')
// console.log(tagName);

// let tag=document.querySelector('#item')
// console.log(tag);

let list2=document.querySelectorAll('.food-items')

console.log(list2)

// console.log(liEl2)

