
let circle = document.querySelectorAll("header nav .container-lg .circls button")
let menuLink = document.querySelectorAll(".nav-link")
let sections = document.querySelectorAll("section")

circle[0].style = "background:var(--main-color)"
sections[3].style="display: block !important;"

menuLink[0].addEventListener("click" , () => {
   for(i=0;i<circle.length;i++){
      if(i==0){
         circle[i].style = "background:var(--main-color)"
         sections[i].style="display: block !important;"
      }
      else{
         circle[i].style = "background:transparent"
         sections[i].style="display: none !important;"
      }
   }
})
circle[0].addEventListener("click" , () => {
   for(i=0;i<circle.length;i++){
      if(i==0){
         circle[i].style = "background:var(--main-color)"
         sections[i].style="display: block !important;"
      }
      else{
         circle[i].style = "background:transparent"
         sections[i].style="display: none !important;"
      }
   }
})
menuLink[1].addEventListener("click" , () => {
   for(i=0;i<circle.length;i++){
      if(i==1){
         circle[i].style = "background:var(--main-color)"
         sections[i].style="display: block !important;"
      }
      else{
         circle[i].style = "background:transparent"
         sections[i].style="display: none !important;"
      }
   }
})
circle[1].addEventListener("click" , () => {
   for(i=0;i<circle.length;i++){
      if(i==1){
         circle[i].style = "background:var(--main-color)"
         sections[i].style="display: block !important;"
      }
      else{
         circle[i].style = "background:transparent"
         sections[i].style="display: none !important;"
      }
   }
})
menuLink[2].addEventListener("click" , () => {
   for(i=0;i<circle.length;i++){
      if(i==2){
         circle[i].style = "background:var(--main-color)"
         sections[i].style="display: block !important;"
      }
      else{
         circle[i].style = "background:transparent"
         sections[i].style="display: none !important;"
      }
   }
})
circle[2].addEventListener("click" , () => {
   for(i=0;i<circle.length;i++){
      if(i==2){
         circle[i].style = "background:var(--main-color)"
         sections[i].style="display: block !important;"
      }
      else{
         circle[i].style = "background:transparent"
         sections[i].style="display: none !important;"
      }
   }
})
menuLink[3].addEventListener("click" , () => {
   for(i=0;i<circle.length;i++){
      if(i==3){
         circle[i].style = "background:var(--main-color)"
         sections[i].style="display: block !important;"
      }
      else{
         circle[i].style = "background:transparent"
         sections[i].style="display: none !important;"
      }
   }
})
circle[3].addEventListener("click" , () => {
   for(i=0;i<circle.length;i++){
      if(i==3){
         circle[i].style = "background:var(--main-color)"
         sections[i].style="display: block !important;"
      }
      else{
         circle[i].style = "background:transparent"
         sections[i].style="display: none !important;"
      }
   }
})



// leave comment and reserve table form
let windowBtn = document.querySelectorAll(".window-btn")
let XLogo = document.querySelectorAll(".fa-xmark")
let windowTab = document.querySelectorAll(".window");

windowBtn[0].addEventListener("click" , () => {
   windowTab[0].style="display: block !important"
})
XLogo[0].addEventListener("click" , () => {
   windowTab[0].style="display: none !important"
})

windowBtn[1].addEventListener("click" , () => {
   windowTab[1].style="display: block !important"
})
XLogo[1].addEventListener("click" , () => {
   windowTab[1].style="display: none !important"
})

// menu button
// let seeMenu=document.getElementById("seeMenu")
// let menuPart=document.getElementById("menuPart")
// let allMenu=document.getElementById("allMenu")
seeMenu.addEventListener("click" , ()=>{
   menuPart.classList.add("d-none")
   allMenu.classList.remove("d-none")
   seeMenu.classList.add("d-none")
})
