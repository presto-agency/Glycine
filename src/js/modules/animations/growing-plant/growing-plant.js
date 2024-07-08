import Splide from "@splidejs/splide"
import { lenis } from "../../scroll.js"
import GSAP, { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js"

gsap.registerPlugin(ScrollToPlugin)

import { checkHeaderSticky } from "./checkHeaderSticky.js"
import { firstGrowingUp } from "./firstGrowing.js"
import { changingFrames } from "./changingFrames.js"
import { infoBlock, nextSection, plantFrames, skipBtn, sliderElement } from "./elements.js"

export const growingPlant = () => {
    if (sliderElement && skipBtn && infoBlock && plantFrames.length > 0) {
        const splide = new Splide(sliderElement, {
            type: "fade",
            rewind: false,
            drag: false,
            perPage: 1,
            pagination: false,
            arrows: false,
            autoWidth: false,
            speed: 1000,
            autoplay: false,
            interval: 2000,
        })

        splide.mount()

        checkHeaderSticky()

        lenis.on("scroll", function ({ direction }) {
            checkHeaderSticky()
            firstGrowingUp()
            changingFrames(direction, splide)
        })

        const smoothScrollTo = (element) => {
            GSAP.to(window, {
                duration: 1,
                scrollTo: { y: element.offsetTop - 100 },
            })
        }

        skipBtn.addEventListener("click", () => {
            smoothScrollTo(nextSection)
        })
    }
}
