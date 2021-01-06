document.addEventListener("DOMContentLoaded", function () {
  //@prepros-append dynamicAdapt.js

  const burgerMenuBtn = document.querySelector(".menu-header__icon"),
    headerMobileMenu = document.querySelector(".header__mobile-menu"),
    header = document.querySelector(".header");

  burgerMenuBtn.addEventListener("click", function (event) {
    event.preventDefault();

    toggleHeader();
  });

  window.addEventListener("resize", function () {
    toggleHeader();
  });

  document.documentElement.addEventListener("click", function (event) {
    if (event.target && !event.target.closest(".header")) {
      headerMobileMenu.classList.remove("active");
      header.classList.remove("active");
      burgerMenuBtn.classList.remove("active");
      document.body.classList.remove("lock");
    }
  });

  function toggleHeader() {
    headerMobileMenu.classList.toggle("active");
    header.classList.toggle("active");
    burgerMenuBtn.classList.toggle("active");
    document.body.classList.toggle("lock");
  }
});
