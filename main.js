/* MENU TOGGLE vezérlése */
const menuToggle = document.querySelector("nav .toggle");
const menuList = document.querySelector("nav .menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("menu-active");
  menuList.classList.toggle("menu-active");
});
