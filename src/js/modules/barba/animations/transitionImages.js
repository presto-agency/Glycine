import gsap from "gsap"

export function showImages() {
    const imgOpacity = document.querySelectorAll(".img-cover")
    const imgTransition = document.querySelectorAll(".cover-media")

    gsap.set(imgOpacity, { autoAlpha: 1 })
    gsap.from(imgTransition, { xPercent: -101, stagger: 0.1 })
}

export function hideImages() {
    const imgTransition = document.querySelectorAll(".cover-media")

    gsap.fromTo(imgTransition, { xPercent: 0, stagger: 0.1 }, { xPercent: 101, stagger: 0.1 })
}
