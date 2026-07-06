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

// hero title animation
const tl = gsap.timeline();

tl.from("header,.hero__inner", {
    opacity: 0,
    duration: .8,
    delay: 0.2
})
    .from(".hero__title span", {
        opacity: 0,
        y: 100,
        rotation: -15,
        scale: 0.4,
        duration: 1,
        ease: "back.out(2)",
        stagger: 0.12,
    })
    .from(".tongue", {
        opacity: 0,
        scale: 0,
        rotate: -30,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)"
    }, "-=0.3");