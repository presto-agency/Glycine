import gsap from "gsap"

export function activeLink() {
    const activeLink = document.querySelectorAll("li.active span")
    gsap.to(activeLink, { xPercent: 110 })
}
