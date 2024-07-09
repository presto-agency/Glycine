export const checkingAboveAnimateSection = () => {
    const header = document.getElementById("header")
    const animateSection = document.querySelector(".home-hero")

    if (animateSection) {
        const rect = animateSection.getBoundingClientRect()
        if (rect.top <= 0 && rect.bottom > rect.height / 4) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky")
        }
    }
}
