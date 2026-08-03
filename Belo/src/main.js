import "./sass/style.scss";
import gsap from "gsap";
import Swiper from "swiper";
import "swiper/css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

if (header && hero) {
    window.addEventListener("scroll", () => {
        const trigger = hero.clientHeight + hero.offsetTop;

        if (window.scrollY >= trigger && !header.classList.contains("scrolled")) {
            header.classList.add("scrolled");
        } else if (window.scrollY < trigger && header.classList.contains("scrolled")) {
            header.classList.remove("scrolled");
        }
    });
}

// Select the header-top element
const headerTop = document.querySelector('.header-top');

if (headerTop) {
    // Add a scroll event listener
    window.addEventListener('scroll', () => {
        // Check if the user has scrolled down 50px or more
        if (window.scrollY > 50 && !headerTop.classList.contains('scrolled')) {
            headerTop.classList.add('scrolled'); // Add the 'scrolled' class
        } else if (window.scrollY <= 50 && headerTop.classList.contains('scrolled')) {
            headerTop.classList.remove('scrolled'); // Remove the 'scrolled' class
        }
    });
}

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


});

//slider
// const swiper = new Swiper(".menuSwiper", {
//     centeredSlides: true,
//     loop: true,
//     slideToClickedSlide: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1.8,
//             spaceBetween: 20,
//         },
//         740: {
//             slidesPerView: 3.5,
//             spaceBetween: 20,
//         }
//     }
// });
const swiper = new Swiper(".menuSwiper", {
    loop: true,
    centeredSlides: true,

    slideToClickedSlide: true,   // Click a slide to make it active
    grabCursor: true,            // Show grab cursor on desktop
    watchSlidesProgress: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1.8,
            spaceBetween: 20,
        },
        740: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".concept",
        start: "top 70%",
        toggleActions: "play none none reverse",
    }
});

tl2
    .from(".concept__title", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
    })
    .from(".concept__info p", {
        opacity: 0,
        y: 50,
        stagger: 0.18,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5
    })
    .from(".concept__img img", {
        opacity: 0,
        scale: 1.15,
        rotate: 3,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
    }, "-=0.7");

//for menu

const menuTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".menu",
        start: "top 70%",
        toggleActions: "play none none reverse",
    }
});

menuTl
    .from(".menu__title", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
    })
    .from(".menu-slider", {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
    }, "-=0.3")

const mm = gsap.matchMedia();

mm.add("(min-width: 740px)", () => {
    gsap.from(".menu__card__item", {
        scrollTrigger: {
            trigger: ".menu__card",
            start: "top 75%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        scale: 0.9,
        stagger: 0.5,
        duration: 0.8,
        ease: "back.out(1.6)",

    });
});

mm.add("(max-width: 739px)", () => {
    gsap.utils.toArray(".menu__card__item").forEach((item) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 40,
            scale: 0.8,
            duration: 0.7,
            ease: "back.out(2)",

        });
    });
});

//for information-----------------------------------
const infoTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".information",
        start: "top 70%",
        toggleActions: "play none none reverse",
    }
});

infoTl
    .from(".information__title", {
        y: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
    })
    .from(".information__card__item:first-child", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    }, "-=0.3")
    .from(".information__img", {
        x: 100,
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
    }, "-=0.8")
    .from(".information__desc", {
        y: 40,
        opacity: 0,
        stagger: 0.35,
        duration: 0.6,
        ease: "power2.out",

    }, "-=0.5");

//for instagram

const instaTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".instagram",
        start: "top 75%",
        toggleActions: "play none none reverse",
    }
});

instaTl
    .from(".instagram__title", {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
    })
    .from(".insta-tag", {
        y: 20,
        opacity: 0,
        duration: 0.5,
    }, "-=0.3")
    .from(".instagram__card__item", {
        y: 80,
        opacity: 0,
        scale: 0.8,
        stagger: {
            each: 0.15,
            from: "start"
        },
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.2");

//menu-page
const pizzaTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".menu-pizza",
        start: "top 70%",
        toggleActions: "play none none reverse",
    }
});

pizzaTl
    .from(".menu-pizza__title", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
    .from(".menu-pizza__card", {
        y: 80,
        opacity: 0,
        scale: 0.9,
        stagger: {
            each: 0.55,
            from: "start"
        },
        duration: 0.8,
        ease: "back.out(1.6)"
    }, "-=0.3");

//wine-section
gsap.utils.toArray(".wine, .whitewine").forEach(section => {

    const cards = section.querySelectorAll(".menu-drink__card");
    const title = section.querySelector(".menu-drink__subtitle");

    gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    })

        .from(title, {
            y: 30,
            opacity: 0,
            duration: 0.6
        })

        .from(cards, {
            y: 50,
            opacity: 0,
            stagger: 0.35,
            duration: 0.7,
            ease: "back.out(1.6)"
        }, "-=0.2");

});

//lunch-section
gsap.utils.toArray(".menu-lunch__card").forEach((card) => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    tl.from(card.querySelector(".menu-lunch__card__img"), {
        y: 60,
        opacity: 0,
        scale: .95,
        duration: 1,
        ease: "power4.out"
    })

        .from(card.querySelectorAll(
            ".menu-lunch__subtitle, span, .tags, p, .price"
        ), {
            y: 20,
            opacity: 0,
            stagger: .32,
            duration: .5,
            ease: "power2.out"
        }, "-=.5");

});

//concept02------------
// ===========================
// Concept02
// ===========================

const concept02Tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".concept02",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

concept02Tl

    .from(".concept02__img", {
        scale: 1.15,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
    })

    .from(".concept02__title", {
        y: -40,
        opacity: 0,
        duration: .8,
        ease: "power3.out",
        delay: 0.5
    }, "-=.5")

    .from(".concept02__subtitle", {
        x: -40,
        opacity: 0,
        stagger: .2,
        duration: .6,
        ease: "power2.out"
    }, "-=.3")

    .from(".concept02 p", {
        y: 30,
        opacity: 0,
        stagger: .2,
        duration: .7,
        ease: "power2.out"
    }, "-=.3");

//concept03------------
// ===========================
// Concept03
// ===========================

const concept03Tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".concept03",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

concept03Tl

    .from(".concept03__img", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })

    .from(".concept03__title", {
        y: 50,
        opacity: 0,
        duration: .8,
        ease: "power3.out"
    }, "-=.5")

    .from(".description__01 p", {
        y: 25,
        opacity: 0,
        stagger: .15,
        duration: .5,
        ease: "power2.out"
    })

    .from(".description__02 p", {
        y: 25,
        opacity: 0,
        stagger: .15,
        duration: .5,
        ease: "power2.out"
    }, "-=.3");

//concept04------------
// ===========================
// Concept04
// ===========================

const concept04Tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".concept04",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

concept04Tl

    .from(".concept04__img img", {
        opacity: 0,
        scale: 0.85,
        rotate: -3,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.6)"
    })

    .from(".concept04__title", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out"
    }, "-=.4")

    .from(".concept04__info p", {
        opacity: 0,
        y: 25,
        stagger: 0.18,
        duration: 0.5,
        ease: "power2.out"
    }, "-=.2");


// =========================
// Mobile Menu
// =========================

// =============================
// Mobile Hamburger Menu
// =============================

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".menu-close");

if (hamburger && menu && closeBtn) {

    // Animate the list items
    const menuItems = gsap.utils.toArray(".mobile-menu__item");

    // Every link inside the menu
    const links = gsap.utils.toArray(".mobile-menu a");

    // Initial state
    gsap.set(menu, {
        xPercent: 100,
        autoAlpha: 0
    });

    gsap.set(menuItems, {
        y: 40,
        opacity: 0
    });

    let isOpen = false;

    const menuTl = gsap.timeline({
        paused: true
    });

    menuTl

        // Drawer
        .to(menu, {
            xPercent: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power4.inOut"
        }, 0)

        // Hide Menu text
        .to(".hamburger__text", {
            opacity: 0,
            duration: 0.15
        }, 0)

        // Top line
        .to(".hamburger__line--top", {
            top: "50%",
            y: -1,
            rotate: 45,
            duration: 0.35,
            ease: "power3.out"
        }, 0)

        // Bottom line
        .to(".hamburger__line--bottom", {
            bottom: "50%",
            y: 1,
            rotate: -45,
            duration: 0.35,
            ease: "power3.out"
        }, 0)

        // Menu Items
        .to(menuItems, {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.45,
            ease: "power3.out"
        }, "-=0.2");


    // --------------------------
    // Open Menu
    // --------------------------

    function openMenu() {

        menuTl.timeScale(1).play();

        document.body.style.overflow = "hidden";

        hamburger.setAttribute("aria-expanded", "true");

        isOpen = true;

    }

    // --------------------------
    // Close Menu
    // --------------------------

    function closeMenu() {

        menuTl.timeScale(2).reverse();

        document.body.style.overflow = "";

        hamburger.setAttribute("aria-expanded", "false");

        isOpen = false;

    }

    // --------------------------
    // Hamburger
    // --------------------------

    hamburger.addEventListener("click", () => {

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    });

    // --------------------------
    // Close Button
    // --------------------------

    closeBtn.addEventListener("click", closeMenu);

    // --------------------------
    // Close when clicking links
    // --------------------------

    links.forEach(link => {

        link.addEventListener("click", (e) => {

            const href = link.getAttribute("href");

            closeMenu();

            // Same-page anchor (#...)
            if (href.startsWith("#")) {
                return;
            }

            // Different page
            e.preventDefault();

            setTimeout(() => {
                window.location.href = href;
            }, 250);

        });

    });

    // --------------------------
    // ESC key
    // --------------------------

    window.addEventListener("keydown", (e) => {

        if (e.key === "Escape" && isOpen) {
            closeMenu();
        }

    });

}



// Instagram Error-----------------//
// ======================================
// Instagram Navigation
// ======================================

// Click Instagram button
document.querySelectorAll(".js-instagram").forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        // If already on index page
        if (
            window.location.pathname.endsWith("index.html") ||
            window.location.pathname === "/" ||
            window.location.pathname === "/index.html"
        ) {

            const target = document.querySelector("#instagram");

            if (target) {

                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: target,
                    ease: "power2.inOut"
                });

            }

        } else {

            // Go to index page with hash
            window.location.href = "index.html#instagram";

        }

    });

});


// ======================================
// When page loads with #instagram
// ======================================

window.addEventListener("load", () => {

    if (window.location.hash === "#instagram") {

        const target = document.querySelector("#instagram");

        if (target) {

            setTimeout(() => {

                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: target,
                    ease: "power2.inOut"
                });

            }, 300);

        }

    }

});