document.addEventListener("DOMContentLoaded", function () {
  // Bild Swiper Slider ============================================================================

  // Example =====================
  // <div class = "_swiper"></div>

  // Default

  let sliders = document.querySelectorAll(".swiper");

  if (sliders.length > 0) {
    sliders.forEach((slider) => {
      if (!slider.classList.contains("swiper-bild")) {
        let sliderItems = slider.children;

        let sliderContainer = document.createElement("div");
        sliderContainer.classList.add("swiper-container");
        sliderContainer.setAttribute("id", "intro");

        let sliderWrapper = document.createElement("div");
        sliderWrapper.classList.add("swiper-wrapper");

        for (let index = 0; index < sliderItems.length; index++) {
          let sliderItem = sliderItems[index];

          let slideForWrapper = document.createElement("div");
          slideForWrapper.className = "swiper-slide";

          let sliderItemWrapper = document.createElement("div");
          sliderItemWrapper.className = sliderItem.getAttribute("class");
          sliderItemWrapper.innerHTML = sliderItem.innerHTML;

          slideForWrapper.append(sliderItemWrapper);
          sliderWrapper.append(slideForWrapper);
        }

        slider.innerHTML = "";
        sliderContainer.append(sliderWrapper);
        slider.append(sliderContainer);
        slider.classList.add("swiper-bild");
      }
    });
  }

  // Turn img to background ===========================================

  const ibgBlocks = document.querySelectorAll(".ibg");

  function setImgToBackground() {
    ibgBlocks.forEach((block) => {
      console.log(block);
      let image = block.querySelector("img");

      block.style.cssText = `
				background: url(${image.getAttribute("src")}) center no-repeat;
				background-size : cover;
			`;

      image.style.display = "none";
    });
  }

  setImgToBackground();
});

//@prepros-append dynamicAdapt.js
//@prepros-append sliders.js

// Header ============================================================================

const burgerMenuBtn = document.querySelector(".menu-header__icon"),
  headerMobileMenu = document.querySelector(".header__mobile-menu"),
  header = document.querySelector(".header");

burgerMenuBtn.addEventListener("click", function (event) {
  event.preventDefault();

  headerMobileMenu.classList.toggle("active");
  header.classList.toggle("active");
  burgerMenuBtn.classList.toggle("active");
  document.body.classList.toggle("lock");
});

window.addEventListener("resize", function () {
  removeHeader();
});

document.documentElement.addEventListener("click", function (event) {
  if (event.target && !event.target.closest(".header")) {
    removeHeader();
  }
});

function removeHeader() {
  headerMobileMenu.classList.remove("active");
  header.classList.remove("active");
  burgerMenuBtn.classList.remove("active");
  document.body.classList.remove("lock");
}
