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
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 4,
      slidesPerColumn: 2,
    },
    480: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 4,
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
