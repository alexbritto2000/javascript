//create element

let main=document.getElementById('main')

let div=document.createElement('div')

div.className='alert'

div.textContent='create element'

main.append(div)

div.style.color='black'

console.log(typeof(div));


//innerHTML

let temp=`<div class='alert'>create element via innerHTML</div>`

main.innerHTML+=temp

console.log(typeof(temp));
 



















