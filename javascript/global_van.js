const menu = document.getElementById("mobile-menu");
const hamicon = document.getElementById("ham-icon");
const xicon = document.getElementById("x-icon");

function toggleMenu(){
  menu.classList.toggle("toggleMenu");
  hamicon.classList.toggle("hide");
  xicon.classList.toggle("hide");
}