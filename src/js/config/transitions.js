import { Power1, Power3, Linear } from "gsap"

const isMobile = window.matchMedia("(max-width: 768px)").matches

export const transition = {
    move: {
        duration: 0.6,
        ease: Power3.easeOut,
    },
    scale: {
        duration: 1,
        ease: Power3.easeOut,
    },
    opacity: {
        duration: 0.5,
        ease: Power3.easeOut,
    },
    skew: {
        duration: 1,
        ease: Power1.easeOut,
    },
    textHighlight: {
        duration: 0.7,
        stagger: 0.2,
        ease: Power1.inOut,
    },
    heroContent: {
        duration: 2,
    },
    growingPlant: {
        bottomStart: isMobile ? "-100rem" : "-130rem",
        bottomEnd: isMobile ? "-10rem" : 0,
        heightStart: isMobile ? "30%" : "40%",
        heightEnd: isMobile ? "80%" : "90%",
        duration: 0.7,
        ease: Linear.easeNone,
    },
    skipBtn: {
        bottomEnd: isMobile ? "4vh" : "5vh",
        bottomStart: isMobile ? "10vh" : "15vh",
    },
}
