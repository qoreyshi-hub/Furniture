const $ = document;

const pageCover = $.querySelector(".cover");
const navMenuBtn = $.querySelector(".nav-menu__btn");
const navMobile = $.querySelector(".navMobile");
const navItems = $.querySelectorAll(".navItems");
const navMenuMobileItems = $.querySelectorAll(".navMenuMobileItem");
const emailForms = $.querySelector(".emailForms");
const massage = $.getElementById("massage");
const toSectionHomeBtn = $.getElementById("goHomeSection");
const loaderWrapper = $.querySelector(".loaderWrapper");

const HEADER_OFFSET = 140;

function closeMobileMenu() {
  navMenuBtn.classList.remove("navMenuBtnActive");
  navMobile.classList.remove("navMobileActive");
  pageCover.classList.remove("coverActive");
}

function toggleMobileMenu() {
  navMenuBtn.classList.toggle("navMenuBtnActive");
  navMobile.classList.toggle("navMobileActive");
  pageCover.classList.toggle("coverActive");
}

function scrollToSection(event) {
  const sectionId = event.currentTarget.dataset.dir;

  if (!sectionId || sectionId === "home") {
    window.scrollTo({ top: 0 });
    return;
  }

  const section = $.getElementById(sectionId);

  if (!section) return;

  const sectionTop =
    section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  window.scrollTo({ top: sectionTop });
}

function toggleGoHomeButton() {
  toSectionHomeBtn.classList.toggle("active", window.scrollY > 150);
}

function submitEmailForm(e) {
  e.preventDefault();
  let emailFormInput = emailForms.querySelector("input");
  emailFormInput.value = "";
  massage.classList.add("active");
  setTimeout(() => {
    massage.classList.remove("active");
  }, 3000);
}

navItems.forEach((item) => {
  item.addEventListener("click", scrollToSection);
});

navMenuMobileItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    scrollToSection(event);
    closeMobileMenu();
  });
});

navMenuBtn.addEventListener("click", toggleMobileMenu);
pageCover.addEventListener("click", closeMobileMenu);
toSectionHomeBtn.addEventListener("click", () => window.scrollTo({ top: 0 }));
emailForms.addEventListener("submit", submitEmailForm);
window.addEventListener("scroll", toggleGoHomeButton);
window.addEventListener("load", () => {
  loaderWrapper.classList.add("hidden");
});
