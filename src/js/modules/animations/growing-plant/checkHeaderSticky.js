import { animateSection, header } from "./elements.js"

export const checkHeaderSticky = () => {
    const rect = animateSection.getBoundingClientRect()
    if (rect.top <= 0 && rect.bottom > rect.height / 4) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}
