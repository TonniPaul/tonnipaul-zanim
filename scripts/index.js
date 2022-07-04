let userName = prompt("What is your name:");
alert(`Hello ${userName}, 
Welcome!!!

This page is Still under construction!!.
   =================================
Developed by TonniPaul for practice reasons.

`);
const menuBtn = document.getElementById('nvit');
let menuOpen = false;
let navMenu = document.getElementById('vvv');

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.toggle('open');
    navMenu.classList.toggle('active');
    menuOpen = true;
   }else {
    menuBtn.classList.remove('open');
    navMenu.classList.remove("active");
    menuOpen = false;
  }
});