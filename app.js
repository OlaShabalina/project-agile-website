const menuSwitch = document.querySelector('.nav-switch');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const navBar = document.querySelector('#nav');

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