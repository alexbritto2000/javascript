const foodContainerEl = document.getElementById("food-container");
    console.time('normal way')

    for(let i=0;i<=1000;i++){
        const li = document.createElement("li");
        li.textContent = `food Items `;
        li.className = "food-item";
        foodContainerEl.append(li);
    }

       console.timeEnd('normal way')
  
  


console.time('fragment way')

let fragment=document.createDocumentFragment()

for(let i=1;i<=1000;i++){
    let li=document.createElement('li')
    li.className='food-item'
    li.textContent=`food-items`
    foodContainerEl.append(li);
}

fragment.append(foodContainerEl)


console.timeEnd('fragment way')

