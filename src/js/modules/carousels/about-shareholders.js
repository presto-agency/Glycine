import Splide from "@splidejs/splide"

export const initShareholdersCarousel = () => {
    const carousel = document.querySelector("#about-shareholders__carousel")

    if (carousel) {
        const splide = new Splide(carousel, {
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
            interval: 4000,
        })

        splide.mount()
    }
}
