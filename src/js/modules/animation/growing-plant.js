import Splide from "@splidejs/splide"
import { lenis } from "../scroll.js"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js"
gsap.registerPlugin(ScrollToPlugin)

export const growingPlant = () => {
    const animateSection = document.querySelector(".home-hero")
    const sliderElement = document.querySelector("#hero-slider")
    const growButton = document.getElementById("growButton")
    const infoBlock = document.querySelector(".home-hero__info")
    const skipBtn = document.querySelector(".home-hero__skip-btn")
    const plants = document.querySelectorAll(".plant")
    const nextSection = document.querySelector(".home-advantages")

    if (sliderElement && growButton && infoBlock && plants.length > 0) {
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
        lenis.stop()

        let animationDone = false
        let timeout

        const smoothScrollTo = (element) => {
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: element.offsetTop - 100 },
                onComplete: () => {
                    lenis.start()
                },
            })
        }

        const growAnimation = () => {
            if (animationDone) {
                return
            }

            animationDone = true

            splide.Components.Autoplay.play()
            infoBlock.style.opacity = "0"
            skipBtn.style.opacity = "1"
            plants.forEach((plant) => {
                plant.style.bottom = "0"
                plant.style.height = "100%"
            })
            timeout = setTimeout(() => {
                smoothScrollTo(nextSection)
            }, 10000)
        }

        const isElementInViewport = (element) => {
            const rect = element.getBoundingClientRect()
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            )
        }

        window.addEventListener("wheel", () => {
            if (isElementInViewport(animateSection)) {
                growAnimation()
            } else {
                lenis.start()
            }
        })

        window.addEventListener("touchstart", () => {
            if (isElementInViewport(animateSection)) {
                growAnimation()
            } else {
                lenis.start()
            }
        })

        growButton.addEventListener("click", () => {
            growAnimation()
        })

        skipBtn.addEventListener("click", () => {
            clearTimeout(timeout)

            smoothScrollTo(nextSection)
        })
    }
}
