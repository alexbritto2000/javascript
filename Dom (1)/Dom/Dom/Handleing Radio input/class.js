const formEl = document.forms.feedback;
const categoryEl=formEl.elements.type

const inputCategory=document.querySelector("#input-categories")
const allCategories=[...categoryEl]

// allCategories.forEach((category)=>{
//     console.log(category.checked);

// })

inputCategory.addEventListener("change",(e)=>{
    console.log(e.target.checked);

})

console.log(allCategories[1]);
allCategories[1].select()
// allCategories[1].checked=flase

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);

}

formEl.addEventListener("submit",handleSubmit)


inputCategory.addEventListener("change",(e)=>{
  // const checked=allCategories.find((category)=>
   const checked=e.target
  // )

  if(checked.value==="contribution"){
    alert("Thank you for contribution")
  }
})