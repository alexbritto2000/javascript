const formEl = document.forms.feedback;
const btnEl = document.querySelector("form button");

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);

  const jsonData = JSON.stringify(Object.fromEntries(formData));
  // console.log(jsonData);

  // Send to Backend
  // 1. XMLHttpRequest
  // let xhr = new XMLHttpRequest();
  // xhr.open("GET", "https://reqres.in/api/users/2", true);
  // xhr.onload = function () {
  //   const obj=JSON.parse(xhr.responseText)
 

  //   document.getElementById("response").innerText=obj.data.first_name


  // };
  // xhr.send();

  fetch( "https://reqres.in/api/users?page=2",{
    method:"GET",
    // body:jsonData
  }).then(res=>res.json())
.then(data=>{
  console.log();
  document.getElementById("response").innerText=JSON.stringify(data.data)
})


}

formEl.addEventListener("submit",handleSubmit)
