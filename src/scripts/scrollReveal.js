export default function initScrollReveal(targetElements, defaultProps) {
  ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, { ...defaultProps, ...animation });
  });
}
