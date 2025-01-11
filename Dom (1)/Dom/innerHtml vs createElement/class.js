let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer=document.getElementById("food-container")

// console.log(foodContainer);

inputBtn.addEventListener("click",()=>{


   const li=document.createElement("li")

  const  text=document.createTextNode(inputFood.value)

  li.className="food-Item"

  li.append(text)

  foodContainer.append(li)



})


