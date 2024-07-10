import GSAP from "gsap"
import { transition } from "../config/transitions.js"

export const preloaderFunc = () => {
    const preloader = document.querySelector("#preloader")

    if (preloader) {
        GSAP.to(preloader, {
            opacity: 0,
            duration: transition.opacity.duration,
            ease: transition.opacity.ease,
            onComplete: () => {
                preloader.remove()
            },
        })
    }
}
