const formEl = document.forms.feedback;

const hobbiesEl=formEl.elements.hobbies
const termsEl=formEl.elements.terms
// console.log(hobbiesEl[0].value);

// const hobbiesList=[...hobbiesEl]

// hobbiesList.forEach((hob)=>{

//   console.log(hob.checked);
// })

// console.log(termsEl);

// termsEl.indeterminate=true

termsEl.addEventListener("change",(e)=>{
  console.log(e.target.checked);
})

termsEl.select()

// termsEl.checked=true

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);

}

formEl.addEventListener("submit",handleSubmit)
