import gsap from "gsap"

export function createTimeline(container, animations) {
    const tl = gsap.timeline()

    animations.forEach((animation) => {
        tl.add(animation(container), 0)
    })
    return tl
}
