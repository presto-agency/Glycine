import Splide from "@splidejs/splide"
// import { setProgressBar } from "../progress/progressbar.js"

export const initHeroCarousel = () => {
    const heroCarousel = document.querySelector("#hero-carousel")
    // const progressBar = document.querySelector("#hero-progress-bar")
    if (heroCarousel) {
        const splide = new Splide(heroCarousel, {
            type: "fade",
            rewind: true,
            drag: true,
            perPage: 1,
            pagination: false,
            arrows: false,
            autoWidth: false,
            speed: 1000,
            easing: "linear",
            autoplay: false,
            interval: 4000,
        })

        splide.mount()

        document.querySelectorAll(".home-slider__info-img").forEach((img) => {
            img.addEventListener("click", () => {
                splide.go("+1")
            })
        })

        /* fill after each slide change */
        // splide.on("autoplay:playing", function (rate) {
        //     setProgressBar(progressBar, rate)
        // })
    }
}
