import Splide from "@splidejs/splide"

export const initHeroSlider = () => {
    const slider = document.querySelector("#hero-slider")

    if (slider) {
        const splide = new Splide(slider, {
            type: "fade",
            rewind: false,
            drag: true,
            perPage: 1,
            pagination: false,
            arrows: false,
            autoWidth: false,
            speed: 500,
            easing: "linear",
            autoplay: false,
            interval: 1000,
        })

        splide.mount()

        const growButton = document.getElementById("growButton")
        const infoBlock = document.querySelector(".home-hero__info")
        const plantContainer = document.querySelector(".plant-container")
        const plants = document.querySelectorAll(".plant")
        const mainContent = document.querySelector(".home-hero")

        if (growButton) {
            growButton.addEventListener("click", () => {
                splide.Components.Autoplay.play()
                infoBlock.style.opacity = "0"
                plantContainer.style.bottom = "0"
                plants.forEach((plant) => {
                    plant.style.height = "100%"
                })
            })
        }
    }
}
