// accordeon in section FAQ

const title = document.querySelectorAll(".accordeon-title");

title.forEach((el) => {
  el.addEventListener("click", () => {
    el.nextElementSibling.classList.toggle("show");
    if (el.nextElementSibling.classList.contains("show")) {
      el.querySelector(".acc__img").src =
        "../styles/img/icons/acc_arrow_down.svg";
    } else {
      el.querySelector(".acc__img").src =
        "../styles/img/icons/acc_arrow_right.svg";
    }
  });
});

// accordeon in mobile footer

const footerTitle = document.querySelectorAll(".footer-accordeon-title");

footerTitle.forEach((el) => {
  el.addEventListener("click", () => {
    el.nextElementSibling.classList.toggle("show");
    el.querySelector(".acc__img").classList.toggle("rotate");
  });
});

// slider in section Projects

const swiper = new Swiper(".projects-slider", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 15,
      slidesPerGroup: 4,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },
  },
});

// slider in section Feedback

const slider = new Swiper(".feedback-slider", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: false,
  watchSlidesProgress: true,

  slideClass: "feedback-slide",
  slideActiveClass: "feedback-slide--visible",

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 15,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
  },
});

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
