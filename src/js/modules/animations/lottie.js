import lottie from "lottie-web"

const loadLottieAnimation = (containerId, path) => {
    const container = document.getElementById(containerId)
    if (!container) {
        return
    }

    return lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path,
    })
}

export const lottieAnimations = () => {
    const animations = [
        { id: "home-hero-lottie", path: "../files/Hero.json" },
        { id: "beans-lottie", path: "../files/CTA-1.json" },
        { id: "leafs-lottie", path: "../files/CTA-2.json" },
    ]

    animations.forEach(({ id, path }) => {
        const animation = loadLottieAnimation(id, path)
        if (animation) {
            animation.play()
        }
    })
}
