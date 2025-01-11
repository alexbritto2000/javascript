const formEl = document.forms.feedback;
const nameEl=formEl.elements.fullName
// console.log(nameEl);

// nameEl.value="vivega"
// nameEl.disabled="true"
// nameEl.readOnly=true

// console.log(nameEl.value);



nameEl.addEventListener("focus",()=> console.log("focused"))

nameEl.addEventListener("blur",()=>console.log("blur"))

nameEl.addEventListener("input",(e)=>console.log(` you have entred ${e.target.value}`))

nameEl.addEventListener("change",(e)=>console.log(` changed value ${e.target.value}`))

nameEl.addEventListener("cut",()=>console.log(` cuted`))

nameEl.addEventListener("copy",()=>console.log(` copy`))

nameEl.addEventListener("paste",()=>console.log(`paste`))


nameEl.focus()
nameEl.blur()


const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);

}

formEl.addEventListener("submit",handleSubmit)
