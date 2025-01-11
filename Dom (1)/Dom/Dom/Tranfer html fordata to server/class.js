const formEl=document.forms.feedback

const btnEl=document.querySelector("form button")


const handleSubmit=(event)=>{
    event.preventDefault();
    // const {fullName,type,email,desc,terms}=formEl.elements

    // console.log(fullName,type,email,desc,terms);

   const formData=new FormData(formEl)

   const data=[...formData.entries()]

    const dataString=
    // data.map((x)=>`${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    data.map((key,value)=>`${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&")



   const dataString2= new URLSearchParams(formData).toString()
   console.log(dataString);
   console.log(dataString2);

   const jsomData=JSON.stringify(Object.fromEntries(formData))

   console.log(jsomData);
}




formEl.addEventListener("submit",handleSubmit)

   


