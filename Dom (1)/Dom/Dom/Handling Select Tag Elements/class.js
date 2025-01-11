const formEl = document.forms.feedback;
const countryEl=formEl.elements.country
console.log(countryEl);

// console.log(
//   countryEl.value);

  // countryEl.value="IND"
  // console.log(countryEl.value);


  // console.log(countryEl[2].value);

  // countryEl.selectedIndex=2

  // console.log(countryEl.options[countryEl.selectedIndex].value);
  // console.log(countryEl.options.selectedIndex);



  // countryEl.addEventListener("change",(e)=>{

  //   console.log(e.target.options[e.target.selectedIndex].value);
  //   console.log(e.target.options[e.target.selectedIndex].text);

  // })
  const optionEl=document.createElement("option")

  optionEl.value="FAZ"
optionEl.text="south Africa"

 const option2=new Option("Indonsesia","IDN")

 countryEl.add(optionEl,2)
 countryEl.add(option2,10)

 countryEl.remove(4)

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);

}

formEl.addEventListener("submit",handleSubmit)

