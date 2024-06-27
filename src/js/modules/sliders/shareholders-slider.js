import Splide from "@splidejs/splide"

export const initShareholdersSlider = () => {
    const slider = document.querySelector("#shareholders-slider")

    if (slider) {
        const splide = new Splide(slider, {
            type: "fade",
            rewind: true,
            drag: true,
            perPage: 1,
            pagination: false,
            arrows: false,
            autoWidth: false,
            speed: 500,
            easing: "linear",
            autoplay: true,
            interval: 1000,
        })

        splide.mount()
    }
}
