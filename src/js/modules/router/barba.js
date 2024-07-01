import barba from "@barba/core"
import gsap from "gsap"

import { initHover } from "../buttons/initHover.js"
import { growingPlant } from "../animation/growing-plant.js"
import { initHomeSlider } from "../sliders/home-slider.js"
import { initShareholdersSlider } from "../sliders/shareholders-slider.js"
import { textLoading } from "../animation/text-loading.js"
import { parallax } from "../parallax.js"
import { lottieAnimations } from "../animation/lottie.js"
import { initLenisScroll } from "../scroll.js"
import { initTooltips } from "../tooltips.js"
import { initCarousel } from "../carousels/carousel.js"

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
                await gsap.from(next.container, {
                    opacity: 0,
                    duration: 0.3,
                })
            },
        },
    ],
})

barba.hooks.afterEnter(({ next }) => {
    initLenisScroll()
    growingPlant(next)
    initHover()
    initHomeSlider()
    initShareholdersSlider()
    textLoading()
    parallax()
    lottieAnimations()
    initTooltips()
    initCarousel()
})
