const formEl = document.forms.feedback;




const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  alert("thank you for your feedback")

}

formEl.addEventListener("submit",handleSubmit)

