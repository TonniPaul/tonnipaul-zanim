let userName = prompt("What is your name:");
alert(`Hello ${userName}, 
Welcome!!!

This page is Still under construction!!.
   =================================
Developed by TonniPaul for practice reasons.

`);
const menuBtn = document.querySelector('.hmb');
let menuOpen = false;
let navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navMenu= navMenu.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

let link = document.querySelector('nav-link');
link.addEventListener('click', () => {
   menuBtn.classList.remove('open');
   navMenu= navMenu.classList.remove('active');
   menuOpen = false;
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
   menuBtn.classList.remove("open");
   navMenuclassList.remove("active");
}))

// if(menuBtn.classList('open'))  {
   
//    menuOpen= true
// }else{
   
//    menuOpen = false;
// };






// const hamburger = document.querySelector("hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () =>{
//    hamburger.classList.toggle("active");
//    navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
//    hamburger.classList.remove("active");
//    navMenuclassList.remove("active");
// }))