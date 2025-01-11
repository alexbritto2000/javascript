const formEl=document.forms.feedback

const btnEl=document.querySelector("form button")


const handleSubmit=(event)=>{
    event.preventDefault();
    // const {fullName,type,email,desc,terms}=formEl.elements

    // console.log(fullName,type,email,desc,terms);

    formData=new FormData(formEl)


}

const handleFormData=(e)=>{
    console.log("formdata fired!");

   const formData=e.formData

   formData.append("api-key","adfsdfhkj")
   console.log([...formData.entries()]);
   console.log([...formData.values()]);
   console.log(formData.get("fullName"));
   console.log(formData.getAll("type"));
   
   console.log(formData.has("gender"));
   console.log([...formData.keys("gender")]);
 
   formData.set("gender","leraing new things")
   console.log([...formData.values()]);

   formData.delete("terms")
   console.log([...formData.values()]);


   
    console.log(formData);

}

formEl.addEventListener("submit",handleSubmit)

formEl.addEventListener("formdata",handleFormData)
   


