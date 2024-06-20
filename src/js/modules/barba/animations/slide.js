import gsap from "gsap"

export function slideTransitionLeave(container) {
    return gsap.fromTo(
        container,
        {
            transform: "translateX(0%)",
        },
        {
            duration: 1,
            transform: "translateX(100%)",
            ease: "power1.out",
        }
    )
}
export function slideTransitionEnter(container) {
    return gsap.fromTo(
        container,
        {
            transform: "translateX(-100%)",
        },
        {
            duration: 1,
            transform: "translateX(0%)",
            ease: "power1.out",
        }
    )
}
