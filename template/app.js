const items = document.querySelector(".menu-list").querySelectorAll("a");
const navbar = document.querySelector(".navbar");
const menuOverlay = document.querySelector(".menu-overlay");
const toggleInput = document.querySelector(".hamburger-toggle");

items.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.classList.add("no-visible");
    menuOverlay.classList.add("no-scale");
    toggleInput.checked = false;
  });
});

toggleInput.addEventListener("click", () => {
  navbar.classList.remove("no-visible");
  menuOverlay.classList.remove("no-scale");
});
