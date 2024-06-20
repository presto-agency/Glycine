import barba from "@barba/core"
import gsap from "gsap"
import { slideTransitionEnter, slideTransitionLeave } from "./animations/index.js"

barba.init({
    transitions: [
        {
            name: "general",
            once: ({ next }) => {
                return gsap.from(next.container, {
                    opacity: 0,
                    duration: 0.3,
                })
            },

            async leave({ current }) {
                await gsap.to(current.container, {
                    opacity: 0,
                    duration: 0.3,
                })
                current.container.remove()
            },
            async enter({ next }) {
                await gsap.from(next.container, {
                    opacity: 0,
                    duration: 0.3,
                })
            },
        },
    ],
})
