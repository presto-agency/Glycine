import Splide from "@splidejs/splide"
import { carouselCursorFollow } from "./carouselCursorFollow.js"

export const initMissionCarousel = () => {
    const carousel = document.querySelector("#about-mission__carousel")

    if (carousel) {
        const splide = new Splide(carousel, {
            type: "slide",
            rewind: true,
            drag: "free",
            perPage: 1,
            pagination: false,
            arrows: false,
            autoWidth: true,
            speed: 5000,
            easing: "linear",
            gap: "32rem",
        })

        splide.on("mounted", () => {
            carouselCursorFollow(carousel)
        })

        splide.mount()
    }
}
