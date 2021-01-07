if (document.querySelector(".intro__slider")) {
  let myIntroSlider = new Swiper(".intro__slider-container", {
    // Стрелки
    navigation: {
      nextEl: ".navigation-arrows-intro__next",
      prevEl: ".navigation-arrows-intro__prev",
    },

    loop: true,
    speed: 800,
    autoHeight: true,
    observer: true,
    observeParents: true,
    slidesPerGroup: 1,

    pagination: {
      el: ".intro__pagination",
      // Буллеты
      type: "bullets",
      clickable: true,
    },

    // // Автопрокрутка
    // autoplay: {
    //   // Пауза между прокруткой
    //   delay: 5000,
    //   // Закончить на последнем слайде
    //   stopOnLastSlide: false,
    //   // Отключить после ручного переключения
    //   disableOnInteraction: false,
    // },
  });
}
