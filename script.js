// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// NAVBAR BACKGROUND ON SCROLL

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if(window.scrollY > 50){
    header.style.background = "#020617";
  }
  else{
    header.style.background = "rgba(15,23,42,0.9)";
  }

});

// SIMPLE FADE-IN ANIMATION

const cards = document.querySelectorAll(
  ".research-card, .project-card, .publication-card, .stat-card"
);

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if(position < screenPosition){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

});

// INITIAL STATE

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s";

});