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

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,

  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});
