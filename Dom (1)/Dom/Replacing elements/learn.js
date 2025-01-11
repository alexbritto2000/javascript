const foodContainerEl=document.querySelector("#food-container")

 let sambarLi=document.querySelector('#food-container :first-child')

// console.log(sambarLi);


let li=document.createElement('li')
li.className='food-item'
li.textContent='paruppu'

console.log(li);

// sambarLi.replaceWith(li)
foodContainerEl.replaceChildren(li)

// sambarLi.parentNode.replaceChild(li,sambarLi)