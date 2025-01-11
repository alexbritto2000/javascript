
let input=document.getElementById('input-food')
let inputBtn=document.getElementById('input-btn')
let div=document.getElementById('div')
let h1Tag=document.getElementById('h1')


inputBtn.addEventListener("click",()=>{
       h1Tag.innerHTML=input.value
})