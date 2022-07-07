function askName() {
  let username = sessionStorage.getItem('username');

  if (username === null) {
      username = prompt("Please enter your name.");
  }

  if (username != null) {
      document.getElementById("user").innerHTML = "Hello, " + username;
      sessionStorage.setItem('username', username);
  } else {
      document.getElementById("stranger").classList.remove('shows');
  }
}

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