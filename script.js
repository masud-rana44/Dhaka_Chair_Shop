const nav = document.querySelector(".nav");
const navToggleBtn = document.querySelector(".btn-mobile-nav");

navToggleBtn.addEventListener("click", () => {
  console.log("Btn clicked");
  nav.classList.toggle("nav-open");
});
