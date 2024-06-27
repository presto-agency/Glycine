import { gsap } from "gsap"

export const setProgressBar = (progressBar, rate) => {
    if (progressBar) {
        gsap.to(progressBar, {
            "--before-transform": `translateX(${100 - rate * 100}%)`,
            "--after-transform": `translateX(${-(100 - rate * 100)}%)`,
            "--height": `${rate * 100}%`,
            duration: 0.1,
        })
    }
}
