// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");
  const orderBtn = document.querySelector(".hero .btn");
  const form = document.querySelector(".newsletter form");

  // --- Preloader hide fallback ---
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.style.display = "none";
    }, 3000); // matches CSS delay+duration
  });

  // --- Smooth scroll + active nav highlight ---
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // --- Order Now button redirect ---
  orderBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://www.zomato.com/", "_blank");
  });

  // --- Newsletter form submit ---
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("input").value;
    if (email) {
      alert(`🎉 Thanks for subscribing, ${email}!`);
      form.reset();
    }
  });
});
