var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  centeredSlides: false,
  slidesPerGroup: 3,
  spaceBetween: 50,
  grabCursor: true,
  loop: false,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
