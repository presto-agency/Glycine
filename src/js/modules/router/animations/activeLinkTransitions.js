import gsap from "gsap"

function activeLinkShow(container) {
    const lineUnderLink = container.querySelector(".header__nav-item.is-active span")
    if (lineUnderLink) {
        return gsap.to(lineUnderLink, { translateX: 0 })
    }
}

function activeLinkHide(container) {
    const lineUnderLink = container.querySelector(".header__nav-item.is-active span")

    if (lineUnderLink) {
        return gsap.fromTo(lineUnderLink, { translateX: 0 }, { translateX: "101%" })
    }
}

export const activeLinkTransition = {
    activeLinkShow,
    activeLinkHide,
}
