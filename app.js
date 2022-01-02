// selecting elements

const menuSwitch = document.querySelector('.nav-switch');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const navBar = document.querySelector('#nav');

// Media Queries selection 

let mobileVersion = window.matchMedia("screen and (max-width: 650px)");

// event for showing or not showing the nav menu depending on the screen resolution

mobileVersion.addEventListener("change", (e) => {
  if (mobileVersion.matches) {
    navBar.classList.add("hidden");
  } else {
    navBar.classList.remove("hidden");
  }
})

// event for opening and closing nav menu

openMenu.addEventListener("click", (e) => {
  navBar.classList.remove("hidden");
  openMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
})

closeMenu.addEventListener("click", (e) => {
  navBar.classList.add("hidden");
  openMenu.classList.remove("hidden");
  closeMenu.classList.add("hidden");
})
