import GSAP from "gsap"
import { transition } from "../../../config/transitions.js"

let animationDone = false

export const firstGrowingUp = (infoBlock, skipBtn, plantFrames) => {
    if (animationDone) {
        return
    } else {
        animationDone = true

        GSAP.timeline()
            .to(skipBtn, {
                duration: transition.move.duration,
                bottom: transition.skipBtn.bottomEnd,
            })
            .to(infoBlock, { opacity: 0, duration: transition.heroContent.duration })
        plantFrames.forEach((plant) => {
            GSAP.to(plant, {
                bottom: transition.growingPlant.bottomEnd,
                height: transition.growingPlant.heightEnd,
                duration: transition.growingPlant.duration,
                ease: transition.growingPlant.ease,
            })
        })
    }
}

export const firstGrowingDown = (infoBlock, skipBtn, plantFrames) => {
    animationDone = false
    GSAP.timeline()
        .to(skipBtn, {
            duration: transition.move.duration,
            bottom: transition.skipBtn.bottomStart,
        })
        .to(infoBlock, { opacity: 1, duration: transition.heroContent.duration })
    plantFrames.forEach((plant) => {
        GSAP.to(plant, {
            bottom: transition.growingPlant.bottomStart,
            height: transition.growingPlant.heightStart,
            duration: transition.growingPlant.duration,
            ease: transition.growingPlant.ease,
        })
    })
}
