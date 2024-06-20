import gsap from "gsap"

export function createTimeline(container, animations) {
    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: "power4.out",
        },
    })

    animations.forEach((animation) => {
        tl.add(animation(container), 0)
    })

    return tl
}
