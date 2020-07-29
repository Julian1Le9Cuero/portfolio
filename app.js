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

// Writing effect
const TypeWriter = function (txtElement, wait, words) {
  this.txtElement = txtElement;
  this.words = words;
  this.wait = parseInt(wait, 10);
  this.txt = "";
  this.wordIndex = 0;
  this.isDeleting = false;
  this.type();
};

TypeWriter.prototype.type = function () {
  const current = this.wordIndex % this.words.length;
  const fullTxt = this.words[current];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  let typeSpeed = 500;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if (this.txt === "" && this.isDeleting) {
    typeSpeed = 500;
    this.isDeleting = false;
    this.wordIndex++;
  }

  setTimeout(() => this.type(), typeSpeed);
};

// Start typing just after the DOM is loaded
document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".type-writer");
  const wait = txtElement.getAttribute("data-wait");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  new TypeWriter(txtElement, wait, words);
}
