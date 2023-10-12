//Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//Navbar Fixed
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("navbar-fixed", window.scrollY > 0);
});
