document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ativo");
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    },
    {
      threshold: 0.2, // 20% do elemento visível já ativa
    },
  );

  elementos.forEach((elemento) => observer.observe(elemento));
});
