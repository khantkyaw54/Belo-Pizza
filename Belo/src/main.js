import "./sass/style.scss";
import gsap from "gsap";
import Swiper from "swiper";
import "swiper/css";

const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    const trigger = hero.offsetHeight;

    if (window.scrollY >= trigger) {
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

//concept//menu

gsap.from(".concept__hero__title span, .menu__hero__title span", {
    delay: .5,
    x: -window.innerWidth,
    opacity: 0,
    rotation: 10,
    duration: 1,
    ease: "power4.out",
    stagger: {
        each: .2,
        from: "end"
    }
});

gsap.from(".concept__hero__img, .menu__hero__img", {

    opacity: 0,

    duration: 0.5,

    ease: "power1.out",

    delay: 0.5
});
