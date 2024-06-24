import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger.js"

export const textLoading = () => {
    const textContainers = document.querySelectorAll("[animated-text]")

    textContainers.forEach((textContainer) => {
        const text = textContainer.textContent.trim()
        const words = text.split(/(\s+)/).filter((e) => e.trim().length > 0)

        textContainer.innerHTML = words.map((word) => `<span class="word">${word}</span>`).join(" ")

        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".word", {
            scrollTrigger: {
                trigger: textContainer,
                start: "top 80%",
                end: "bottom 60%",
                scrub: true,
                toggleActions: "play none none reverse",
            },
            opacity: 1,
            stagger: 0.1,
            ease: "power1.inOut",
            duration: 0.5,
        })
    })
}
