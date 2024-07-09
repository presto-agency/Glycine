import { firstGrowingDown } from "./firstGrowing.js"

let scrollTriggerCount = 1

export const changingFrames = (direction, splide, infoBlock, skipBtn, plantFrames) => {
    const animateSection = document.querySelector(".home-hero")

    if (animateSection) {
        const rect = animateSection.getBoundingClientRect()

        const triggerOffset = rect.height / 6
        const currentTrigger = -scrollTriggerCount * triggerOffset

        if (direction > 0 && rect.top <= currentTrigger && scrollTriggerCount < 5) {
            splide.go("+1")
            scrollTriggerCount++
        } else if (direction < 0 && rect.top > currentTrigger - triggerOffset) {
            splide.go("-1")
            if (scrollTriggerCount > 0) {
                scrollTriggerCount--
            } else {
                firstGrowingDown(infoBlock, skipBtn, plantFrames)
            }
        }
    }
}
