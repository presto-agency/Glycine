import barba from "@barba/core"
import GSAP from "gsap"

import { initHover } from "../buttons/initHover.js"
import { parallax } from "../parallax.js"
import { initLenisScroll, lenis } from "../scroll.js"
import { initTooltips } from "../tooltips.js"
import { initHomeCarousel } from "../carousels/home-carousel.js"
import { initShareholdersCarousel } from "../carousels/about-shareholders.js"
import { initMissionCarousel } from "../carousels/about-mission.js"
import { languageSelect } from "../languageSelect.js"
import { growingPlant, textHighlight, lottieAnimations } from "../animations/index.js"
import { createTimeline } from "./animations/createTimeline.js"
import { activeLinkTransition } from "./animations/activeLinkTransitions.js"
import { toggleActiveLink } from "./toggleActiveLink.js"
import { transition } from "../../config/transitions.js"
import { preloaderFunc } from "../preloader.js"

barba.hooks.afterEnter(({ next }) => {
    languageSelect()
    initLenisScroll()
    initHover()
    textHighlight()
    parallax()
    lottieAnimations()
    initTooltips()
    initHomeCarousel()
    initShareholdersCarousel()
    initMissionCarousel()
})

let result

barba.init({
    transitions: [
        {
            name: "general",
            once: ({ next }) => {
                result = growingPlant(next)
                preloaderFunc(next.container)

                GSAP.from(next.container, {
                    opacity: 0,
                    duration: transition.opacity.duration,
                })
            },
            async leave({ current }) {
                await GSAP.to(current.container, {
                    opacity: 0,
                    duration: transition.opacity.duration,
                })
                current.container.remove()

                if (result && typeof result.removeScrollListener === "function") {
                    result.removeScrollListener()
                }
            },
            async enter({ next }) {
                lenis.scrollTo(0, { immediate: true })
                result = growingPlant(next)

                await GSAP.from(next.container, {
                    opacity: 0,
                    duration: transition.opacity.duration,
                })
            },
        },
    ],
})
