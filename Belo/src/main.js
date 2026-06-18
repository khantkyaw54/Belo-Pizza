import './sass/style.scss';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});


const images = document.querySelectorAll(".hero__image img");

let current = 0;

setInterval(() => {
  images[current].classList.remove("active");

  current = (current + 1) % images.length;

  images[current].classList.add("active");
}, 2000); // change every 2 seconds

const image = document.getElementById("menuImage");
const subtitles = document.querySelectorAll(".menu__subtitle");

let currentIndex = 0;
let autoSlide;

function showItem(index) {
  subtitles.forEach(sub => sub.classList.remove("active"));

  subtitles[index].classList.add("active");

  image.style.opacity = 0;

  setTimeout(() => {
    image.src = subtitles[index].dataset.image;
    image.style.opacity = 1;
  }, 300);

  currentIndex = index;
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    const next = (currentIndex + 1) % subtitles.length;
    showItem(next);
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

// Hover
subtitles.forEach((subtitle, index) => {

  subtitle.addEventListener("mouseenter", () => {
    stopAutoSlide();      // stop auto changing
    showItem(index);      // show hovered pizza
  });

  subtitle.addEventListener("mouseleave", () => {
    startAutoSlide();     // resume auto changing
  });

});

startAutoSlide();