import barba from "@barba/core"
import gsap from "gsap"

import { initHover } from "../buttons/initHover.js"
import { parallax } from "../parallax.js"
import { initLenisScroll, lenis } from "../scroll.js"
import { initTooltips } from "../tooltips.js"
import { initHomeCarousel } from "../carousels/home-carousel.js"
import { initShareholdersCarousel } from "../carousels/about-shareholders.js"
import { initMissionCarousel } from "../carousels/about-mission.js"
import { languageSelect } from "../languageSelect.js"
import { growingPlant, textHighlight, lottieAnimations } from "../animations/index.js"

barba.init({
    transitions: [
        {
            name: "general",

            once: ({ next }) => {
                return gsap.from(next.container, {
                    opacity: 0,
                    duration: 0.3,
                })
            },

            async leave({ current }) {
                await gsap.to(current.container, {
                    opacity: 0,
                    duration: 0.3,
                })
                current.container.remove()
            },
            async enter({ next }) {
                lenis.scrollTo(0, { immediate: true })
                await gsap.from(next.container, {
                    opacity: 0,
                    duration: 0.3,
                })
            },
        },
    ],
})

barba.hooks.afterEnter(({ next }) => {
    languageSelect()
    initLenisScroll()
    growingPlant(next)
    initHover()
    textHighlight()
    parallax()
    lottieAnimations()
    initTooltips()
    initHomeCarousel()
    initShareholdersCarousel()
    initMissionCarousel()
})
