// Navbar

const navbar = document.querySelector("nav");
window.addEventListener("scroll", () =>
  navbar.classList.toggle("sticky", window.scrollY > 0)
);
