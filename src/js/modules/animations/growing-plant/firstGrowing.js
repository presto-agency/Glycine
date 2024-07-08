import GSAP from "gsap"
import { infoBlock, plantFrames, skipBtn } from "./elements.js"

let animationDone = false

export const firstGrowingUp = () => {
    if (animationDone) {
        return
    } else {
        animationDone = true

        requestAnimationFrame(() => {
            GSAP.to(skipBtn, { duration: 0.5, bottom: "5vh" })
            infoBlock.style.opacity = "0"
            plantFrames.forEach((plant) => {
                plant.style.bottom = "0"
                plant.style.height = "90%"
            })
        })
    }
}

export const firstGrowingDown = () => {
    animationDone = false
    requestAnimationFrame(() => {
        GSAP.to(skipBtn, { duration: 0.5, bottom: "15vh" })
        infoBlock.style.opacity = "1"
        plantFrames.forEach((plant) => {
            plant.style.bottom = "-130rem"
            plant.style.height = "40%"
        })
    })
}
