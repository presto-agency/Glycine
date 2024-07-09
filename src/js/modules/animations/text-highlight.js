import GSAP, { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger.js"
import { transition } from "../../config/transitions.js"

export const textHighlight = () => {
    const textContainers = document.querySelectorAll("[data-highlight-on-scroll]")

    textContainers.forEach((textContainer) => {
        const text = textContainer.textContent.trim()
        const words = text.split(/(\s+)/).filter((e) => e.trim().length > 0)

        textContainer.innerHTML = words.map((word) => `<span class="word">${word}</span>`).join(" ")

        gsap.registerPlugin(ScrollTrigger)

        GSAP.to(".word", {
            scrollTrigger: {
                trigger: textContainer,
                start: "top 80%",
                end: "bottom 60%",
                scrub: true,
                toggleActions: "play none none reverse",
            },
            opacity: 1,
            duration: transition.textHighlight.duration,
            stagger: transition.textHighlight.stagger,
            ease: transition.textHighlight.ease,
        })
    })
}
