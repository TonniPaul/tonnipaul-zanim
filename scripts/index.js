let userName = prompt("What is your name:");
alert(`Hello ${userName}, 
Welcome!!!

This page is Still under construction!!.
   =================================
Developed by TonniPaul for practice reasons.

`);

const hamburger = document.querySelector("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
   hamburger.classList.remove("active");
   navMenuclassList.remove("active");
}))