import Splide from "@splidejs/splide"
import { lenis } from "../../scroll.js"
import GSAP, { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js"

gsap.registerPlugin(ScrollToPlugin)

import { checkingAboveAnimateSection } from "./checkingAboveAnimateSection.js"
import { firstGrowingUp } from "./firstGrowing.js"
import { changingFrames } from "./changingFrames.js"

export const growingPlant = () => {
    const sliderElement = document.querySelector("#hero-slider")
    const infoBlock = document.querySelector(".home-hero__info")
    const skipBtn = document.querySelector(".home-hero__skip-btn")
    const plantFrames = document.querySelectorAll(".plant-frame")
    const nextSection = document.querySelector(".home-advantages")

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
        checkingAboveAnimateSection()

        const smoothScrollTo = (element) => {
            lenis.off("scroll", handleScroll)
            GSAP.to(window, {
                duration: 1,
                scrollTo: { y: element.offsetTop - 100 },
            })
            setTimeout(() => lenis.on("scroll", handleScroll), 1000)
        }

        skipBtn.addEventListener("click", () => {
            smoothScrollTo(nextSection)
        })

        function handleScroll({ direction }) {
            checkingAboveAnimateSection()
            firstGrowingUp(infoBlock, skipBtn, plantFrames)
            changingFrames(direction, splide, infoBlock, skipBtn, plantFrames)
        }

        lenis.on("scroll", handleScroll)

        const removeScrollListener = () => {
            lenis.off("scroll", handleScroll)
        }

        return {
            removeScrollListener,
        }
    }
}
