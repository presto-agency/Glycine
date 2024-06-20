import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger.js"
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const frameCount = 5
const images = []

for (let i = 0; i < frameCount; i++) {
    images.push(`img/pages/home/frame-${i + 1}.png`)
}

const frame1 = document.getElementById("frame-1")
const frame2 = document.getElementById("frame-2")

let previousIndex = 0

frame1.style.backgroundImage = `url(${images[0]})`
frame1.style.opacity = 1

gsap.to(
    {},
    {
        duration: 1,
        ease: "none",
        scrollTrigger: {
            trigger: "#animation-container",
            start: "top top",
            end: `+=${frameCount * 50}`,
            scrub: true,
            pin: true,
            pinSpacing: false,
            onUpdate: (self) => {
                const index = Math.floor(self.progress * (frameCount - 1))

                if (index !== previousIndex) {
                    if (index % 2 === 0) {
                        frame2.style.backgroundImage = `url(${images[index]})`
                        gsap.to(frame1, { opacity: 0 })
                        gsap.to(frame2, { opacity: 1 })
                    } else {
                        frame1.style.backgroundImage = `url(${images[index]})`
                        gsap.to(frame1, { opacity: 1 })
                        gsap.to(frame2, { opacity: 0 })
                    }
                    previousIndex = index
                }
            },
        },
    }
)
