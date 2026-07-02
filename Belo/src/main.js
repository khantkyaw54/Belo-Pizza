import "./sass/style.scss";
import gsap from "gsap";

const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    if (window.scrollY > hero.offsetHeight - header.offsetHeight) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

gsap.from(".hero__info", {
    scrollTrigger: {
        trigger: ".hero__info",
        start: "top bottom",
    },
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1)",
    repeat: 1,
    scale: 1.5,

});