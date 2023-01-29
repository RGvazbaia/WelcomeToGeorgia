let splide = new Splide(".splide", {
  type: "loop",
  perPage: 4,
  perMove: 1,
  gap: "1.5rem",
  padding: "2rem",
  drag: "free",
  snap: true,
  arrows: false,
  pagination: false,
  autoplay: true,
  breakpoints: {
    1400: {
      perPage: 3,
      gap: ".7rem",
      padding: "1.2",
    },
    820: {
      perPage: 2,
      gap: ".7rem",
      padding: "1rem",
    },
    480: {
      perPage: 1,
      gap: ".7rem",
      padding: "1.2rem",
    },
  },
});

splide.mount();
