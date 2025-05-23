/* MENU TOGGLE vezérlése */
const menuToggle = document.querySelector("nav .toggle");
const menuList = document.querySelector("nav .menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("menu-active");
  menuList.classList.toggle("menu-active");
});

/* MENU ACTIVE LINK vezérlése */
const sections = document.querySelectorAll("section");
const menuitems = document.querySelectorAll("nav .menu li a.menu-ref");

menuitems.forEach((menuitem, index) => {
  menuitem.addEventListener("click", (menuevent) => {
    menuevent.preventDefault();
    let actualmenuitem = document.querySelector(".actual");
    actualmenuitem.classList.remove("actual");
    menuitem.classList.add("actual");
    let actualsection = document.querySelector(".actualsection");
    actualsection.classList.remove("actualsection");
    sections[index].classList.add("actualsection");
  });
});
