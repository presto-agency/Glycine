import Splide from "@splidejs/splide"
import { lenis } from "../scroll.js"
import GSAP, { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js"
gsap.registerPlugin(ScrollToPlugin)

export const growingPlant = () => {
    const animateSection = document.querySelector(".home-hero")
    const sliderElement = document.querySelector("#hero-slider")
    const infoBlock = document.querySelector(".home-hero__info")
    const skipBtn = document.querySelector(".home-hero__skip-btn")
    const plants = document.querySelectorAll(".plant-frame")
    const nextSection = document.querySelector(".home-advantages")
    const header = document.getElementById("header")

    if (sliderElement && skipBtn && infoBlock && plants.length > 0) {
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
        let scrollTriggerCount = 1

        let rect = animateSection.getBoundingClientRect()
        if (rect.top <= 0 && rect.bottom > rect.height / 4) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky")
        }
        lenis.on("scroll", function ({ direction }) {
            growAnimation()

            rect = animateSection.getBoundingClientRect()
            const triggerOffset = rect.height / 6
            const currentTrigger = -scrollTriggerCount * triggerOffset

            if (direction > 0 && rect.top <= currentTrigger) {
                splide.go("+1")
                scrollTriggerCount++
            } else if (direction < 0 && rect.top > currentTrigger - triggerOffset) {
                splide.go("-1")
                scrollTriggerCount--
            }

            if (rect.top <= 0 && rect.bottom > rect.height / 4) {
                header.classList.add("sticky")
            } else {
                header.classList.remove("sticky")
            }
        })

        let animationDone = false

        const smoothScrollTo = (element) => {
            GSAP.to(window, {
                duration: 1,
                scrollTo: { y: element.offsetTop - 100 },
            })
        }

        function growAnimation() {
            if (animationDone) {
                return
            } else {
                animationDone = true

                GSAP.to(skipBtn, {
                    duration: 0.5,
                    bottom: "5vh",
                })
                infoBlock.style.opacity = "0"
                plants.forEach((plant) => {
                    plant.style.bottom = "0"
                    plant.style.height = "90%"
                })
            }
        }

        skipBtn.addEventListener("click", () => {
            smoothScrollTo(nextSection)
        })
    }
}
