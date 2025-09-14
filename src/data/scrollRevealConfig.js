export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

const isDesktop = window.innerWidth > 768;

export const targetElements = [
  {
    element: ".section-title",
    animation: {
      delay: 300,
      distance: "0px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-title",
    animation: {
      delay: 500,
      origin: isDesktop ? "left" : "bottom",
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      delay: 600,
      origin: "bottom",
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      delay: 1000,
      origin: isDesktop ? "left" : "bottom",
    },
  },
  {
    element: ".experience-wrapper__text",
    animation: {
      delay: 500,
      origin: isDesktop ? "left" : "bottom",
    },
  },
  {
    element: ".experience-wrapper__details",
    animation: {
      delay: 1000,
      origin: isDesktop ? "right" : "bottom",
    },
  },
  {
    element: ".education-wrapper__period",
    animation: {
      delay: 600,
      origin: isDesktop ? "left" : "bottom",
    },
  },
  {
    element: ".education-wrapper__info",
    animation: {
      delay: 1000,
      origin: isDesktop ? "right" : "bottom",
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      delay: 800,
      origin: "bottom",
    },
  },
];
