export const toggleActiveLink = () => {
    const links = document.querySelectorAll(".header__nav-item")
    const currentPath = window.location.pathname

    links.forEach((link) => {
        const linkPath = new URL(link.href).pathname

        if (linkPath === currentPath) {
            link.classList.add("is-active")
        }
    })
}
