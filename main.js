let container = document.querySelector(".container");
let menu = document.querySelector(".nav__menu");
let menuIcon = document.querySelector('img[alt="Menu icon"]');
let closeIcon = document.querySelector('img[alt="Close menu icon"]');

container.addEventListener("click", (e) => {
  if (e.target == menuIcon) {
    menu.classList.add("active");
    document.body.classList.add("inactive");
  } else if (e.target == closeIcon) {
    menu.classList.remove("active");
    document.body.classList.remove("inactive");
  }
});
