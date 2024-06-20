import gsap from "gsap"

export function coverTransition(container) {
    return gsap.fromTo(
        container,
        {
            transform: "translateY(-100%)",
        },
        {
            duration: 1,
            transform: "translateY(0%)",
            ease: "power1.out",
        }
    )
}
