const sections = document.querySelectorAll("section");
const navDots = document.querySelectorAll(".side-nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navDots.forEach((dot) => {
          dot.classList.remove("active");
          if (dot.dataset.section === id) {
            dot.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.4,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});