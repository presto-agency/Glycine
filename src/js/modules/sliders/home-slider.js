import Splide from "@splidejs/splide"
// import { gsap } from "gsap"

export const initHomeSlider = () => {
    const slider = document.querySelector("#home-slider")
    // const progressBar = document.querySelector("#progress-bar")
    const animationBorders = document.querySelectorAll(".border-animation")

    // const setProgressBar = (rate) => {
    //     if (progressBar) {
    //         gsap.to(progressBar, {
    //             "--before-transform": `translateX(0%)`,
    //             "--after-transform": `translateX(0%)`,
    //             "--height": `100%`,
    //         })
    //     }
    // }

    const startAnimation = () => {
        animationBorders.forEach((border) => {
            border.classList.remove("active")
            setTimeout(() => {
                border.classList.add("active")
            }, 50)
        })
    }

    if (slider) {
        const splide = new Splide(slider, {
            type: "fade",
            rewind: true,
            drag: true,
            perPage: 1,
            pagination: false,
            arrows: false,
            autoWidth: false,
            speed: 1000,
            easing: "linear",
            autoplay: true,
            interval: 8000,
        })

        splide.mount()
        startAnimation()

        document.querySelectorAll(".home-slider__info-img").forEach((img) => {
            img.addEventListener("click", () => {
                splide.go("+1")
            })
        })

        splide.on("moved", () => {
            startAnimation()
        })

        // splide.on("autoplay:playing", function (rate) {
        //     setProgressBar(rate)
        // })
    }
}
