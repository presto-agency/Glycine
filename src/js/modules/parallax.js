import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger.js"
import Ukiyo from "ukiyojs"

gsap.registerPlugin(ScrollTrigger)

export const parallax = () => {
    const els = document.querySelectorAll("[data-parallax]")
    if (els.length) {
        els.forEach((el) => {
            new Ukiyo(el, {
                scale: 1.2,
                willChange: true,
            })
        })
    }
}
