const tableEl=document.querySelector("table")

let selectedid

tableEl.addEventListener("click",(event)=>{

    const target=event.target
    const closetTr=target.closest("tr");


    if(target.tagName==="TH")
    {
        return;//ingroing th element
    }

    if(selectedid!=undefined){
        selectedid.classList.remove("active")
    }

    selectedid=closetTr

    closetTr.classList.add("active")
    console.log('clicked',target);
    alert(`hello ${closetTr.children[0].textContent}`)
})



document.addEventListener("click",(event)=>{
  
    const id=event.target.dataset.toggleId

    if(!id) return; 

   const el= document.getElementById(id)

   el.hidden=!el.hidden
})

const formEl=document.querySelector("#donate-form")

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    const donateAmount=event.target.querySelector("input").value
    console.log(donateAmount);
    alert(`Thank for Donate ₹ ${donateAmount}`)
})