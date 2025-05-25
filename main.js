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
const menulinks = document.querySelectorAll("a.secondary-ref");
console.log(menulinks);

menuitems.forEach((menuitem) => {
  menuitem.addEventListener("click", (menuevent) => {
    menuevent.preventDefault();
    let actualmenuitem = document.querySelector(".actual");
    actualmenuitem.classList.remove("actual");
    menuitem.classList.add("actual");
    let actualsection = document.querySelector(".actualsection");
    actualsection.classList.remove("actualsection");
    let nextsection = document.querySelector(
      "." + menuitem.getAttribute("data-text")
    );
    nextsection.classList.add("actualsection");
  });
});

menulinks.forEach((menulink) => {
  menulink.addEventListener("click", (menuevent) => {
    menuevent.preventDefault();
    let actualmenuitem = document.querySelector(".actual");
    actualmenuitem.classList.remove("actual");
    let nextmenuitem = document.querySelector(
      "#" + menulink.getAttribute("data-text")
    );
    nextmenuitem.classList.add("actual");
    let actualsection = document.querySelector(".actualsection");
    actualsection.classList.remove("actualsection");
    let nextsection = document.querySelector(
      "." + menulink.getAttribute("data-text")
    );
    nextsection.classList.add("actualsection");
  });
});

/* CONTACT FORM vezérlése */
const submitButton = document.querySelector("form .submit-button");
const form = document.querySelector(".contact-form");
const items = document.querySelectorAll(".form-item");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (Array.from(items).every((item) => item.checkValidity())) {
    form.submit();
    form.reset();
  } else {
    let invalidItems = Array.from(items).filter(
      (item) => !item.checkValidity()
    );
    invalidItems.map((invalidItem) => {
      if (invalidItem.value === "") {
        invalidItem.classList.add("blank");
        invalidItem.parentElement.classList.add("blank");
      } else {
        invalidItem.classList.add("error");
        invalidItem.parentElement.classList.add("error");
      }
      invalidItem.addEventListener("keyup", (event) => {
        if (invalidItem.checkValidity()) {
          invalidItem.classList.remove("blank");
          invalidItem.parentElement.classList.remove("blank");
          invalidItem.classList.remove("error");
          invalidItem.parentElement.classList.remove("error");
        }
      });
    });
  }
});
