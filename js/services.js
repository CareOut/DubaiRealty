// menu Burger

const burgerSelect = document.querySelector(".burger__select");
const burgerSelectMenu = document.querySelector(".burger-select-menu");

burgerSelect.addEventListener("click", () => {
  burgerSelectMenu.classList.toggle("active__select");
  burgerSelect.classList.toggle("yellow");
});

const burgerIcon = document.querySelector(".burger__img");
const burgerMenu = document.querySelector(".burger");
const burgerCross = document.querySelector(".cross__img");

burgerIcon.addEventListener("click", () => {
  burgerMenu.style.display = "block";
});

burgerCross.addEventListener("click", () => {
  burgerMenu.style.display = "none";
});

// modal

const buttonConsultation = document.querySelectorAll(".consultation");
const modal = document.querySelector(".modal");
const modalCross = document.querySelector(".cross__image");

buttonConsultation.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault;
    modal.style.display = "block";
    window.scrollTo(pageYOffset, 0);
  });
});

modalCross.addEventListener("click", () => {
  modal.style.display = "none";
});
