document.addEventListener("DOMContentLoaded", function () {
    var centeredSlider = new Splide(".splide", {
      type: "loop",
      perMove: 1,
      perPage: 5,
      focus: "left",
      gap: "4rem",
      speed: 200,
      easing: "cubic-bezier(.22,.48,.23,.92)",
      pagination: false,
      breakpoints: {
        // Webflow Max Width { 768px-990px }
        991: {
          padding: { right: "10%" },
          perPage: 1
        },
        // Webflow Max Width { 478px - 767px }
        767: {
          padding: { right: "10%" },
          perPage: 1
        },
  
        // Webflow Max Width { 0 - 476px }
        477: {
          padding: { right: "10%" },
          perPage: 1
        }
      },
      classes: {
        prev: "splide__arrow--prev",
        next: "splide__arrow--next",
        pagination: "splide__pagination",
        page: "splide__pagination__page is-outlined"
      }
    });
  
    centeredSlider.mount();
  });  