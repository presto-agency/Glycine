import gsap from "gsap"

export function animateHeader(onComplete) {
    return gsap.to("header li", {
        duration: 0.6,
        yPercent: -100,
        stagger: 0.2,
        ease: "power1.out",
        onComplete: onComplete || null,
    })
}
