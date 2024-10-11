const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;

if (navLinks && menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    if (menuBtnIcon) {
      menuBtnIcon.setAttribute("class", "ri-menu-3-line");
    }
  });
}

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const revealElements = [
  { selector: ".header__content h1", delay: 0 },
  { selector: ".header__content .section__description", delay: 500 },
  { selector: ".header__content .header__btn", delay: 1000 },
  { selector: ".about__content .section__header", delay: 0 },
  { selector: ".about__content .section__description", delay: 500 },
  { selector: ".service__card", interval: 500 },
  { selector: ".portfolio__card", duration: 1000, interval: 500 }
];

revealElements.forEach((element) => {
  const options = {
    ...scrollRevealOptions,
    ...(element.delay ? { delay: element.delay } : {}),
    ...(element.interval ? { interval: element.interval } : {}),
    ...(element.duration ? { duration: element.duration } : {})
  };

  ScrollReveal().reveal(element.selector, options);
});
