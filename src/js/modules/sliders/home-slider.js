import Splide from "@splidejs/splide"

export const initHomeSlider = () => {
    const slider = document.querySelector("#home-slider")
    const animationBorders = document.querySelectorAll(".border-animation")

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
            pauseOnHover: false,
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
    }
}
