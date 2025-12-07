// Simple scroll reveal using IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // once visible, stop observing
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealEls.forEach((el) => observer.observe(el));
});

 const toggleBtn = document.getElementById("theme-toggle");

  // Check saved theme
  if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");

      if (document.documentElement.classList.contains("dark")) {
          localStorage.setItem("theme", "dark");
          toggleBtn.textContent = "☀️";
      } else {
          localStorage.setItem("theme", "light");
          toggleBtn.textContent = "🌙";
      }
  });
