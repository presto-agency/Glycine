import Lenis from "@studio-freight/lenis"

export const lenis = new Lenis()

export const initLenisScroll = () => {
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}

export const updateScroll = () => {
    lenis.resize()
}
