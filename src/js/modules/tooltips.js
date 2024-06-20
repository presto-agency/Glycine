document.addEventListener("DOMContentLoaded", function () {
    const tooltipTargets = document.querySelectorAll(".tooltip-target")

    tooltipTargets.forEach((target) => {
        target.addEventListener("mouseenter", showTooltip)
        target.addEventListener("mouseleave", hideTooltip)
    })

    function showTooltip(event) {
        const target = event.currentTarget
        const tooltipText = target.getAttribute("data-tooltip")
        const preferredPosition = target.getAttribute("data-tooltip-position") || "top"

        let tooltip = document.createElement("div")
        tooltip.className = "tooltip"
        tooltip.textContent = tooltipText
        tooltip.setAttribute("data-position", preferredPosition)
        document.body.appendChild(tooltip)

        let position = calculatePosition(target, tooltip, preferredPosition)

        tooltip.style.top = `${position.top}px`
        tooltip.style.left = `${position.left}px`

        tooltip.classList.add(`arrow-${position.position}`)

        requestAnimationFrame(() => {
            tooltip.classList.add("visible")
        })

        target.tooltipElement = tooltip
    }

    function hideTooltip(event) {
        const target = event.currentTarget
        if (target.tooltipElement) {
            target.tooltipElement.classList.remove("visible")
            target.tooltipElement.addEventListener(
                "transitionend",
                () => {
                    if (
                        target.tooltipElement &&
                        !target.tooltipElement.classList.contains("visible")
                    ) {
                        target.tooltipElement.remove()
                        target.tooltipElement = null
                    }
                },
                { once: true }
            )
        }
    }

    // перевірки чи поміщається підказка в потрібній позиції та чи не вилазить за екран краями
    function calculatePosition(target, tooltip, preferredPosition) {
        const targetRect = target.getBoundingClientRect()
        const tooltipRect = tooltip.getBoundingClientRect()
        const margin = 10 // Відстань між тултипом і ціллю
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        let top, left, position

        function fitsAbove() {
            return targetRect.top - tooltipRect.height - margin >= 0
        }

        function fitsBelow() {
            return targetRect.bottom + tooltipRect.height + margin <= viewportHeight
        }

        function fitsLeft() {
            return targetRect.left - tooltipRect.width - margin >= 0
        }

        function fitsRight() {
            return targetRect.right + tooltipRect.width + margin <= viewportWidth
        }

        switch (preferredPosition) {
            case "bottom":
                if (fitsBelow()) {
                    top = targetRect.bottom + margin
                    left = Math.max(
                        0,
                        Math.min(
                            viewportWidth - tooltipRect.width,
                            targetRect.left + targetRect.width / 2 - tooltipRect.width / 2
                        )
                    )
                    position = "bottom"
                } else {
                    top = targetRect.top - tooltipRect.height - margin
                    left = Math.max(
                        0,
                        Math.min(
                            viewportWidth - tooltipRect.width,
                            targetRect.left + targetRect.width / 2 - tooltipRect.width / 2
                        )
                    )
                    position = "top"
                }
                break
            case "left":
                if (fitsLeft()) {
                    top = Math.max(
                        0,
                        Math.min(
                            viewportHeight - tooltipRect.height,
                            targetRect.top + targetRect.height / 2 - tooltipRect.height / 2
                        )
                    )
                    left = targetRect.left - tooltipRect.width - margin
                    position = "left"
                } else {
                    top = Math.max(
                        0,
                        Math.min(
                            viewportHeight - tooltipRect.height,
                            targetRect.top + targetRect.height / 2 - tooltipRect.height / 2
                        )
                    )
                    left = targetRect.right + margin
                    position = "right"
                }
                break
            case "right":
                if (fitsRight()) {
                    top = Math.max(
                        0,
                        Math.min(
                            viewportHeight - tooltipRect.height,
                            targetRect.top + targetRect.height / 2 - tooltipRect.height / 2
                        )
                    )
                    left = targetRect.right + margin
                    position = "right"
                } else {
                    top = Math.max(
                        0,
                        Math.min(
                            viewportHeight - tooltipRect.height,
                            targetRect.top + targetRect.height / 2 - tooltipRect.height / 2
                        )
                    )
                    left = targetRect.left - tooltipRect.width - margin
                    position = "left"
                }
                break
            case "top":
            default:
                if (fitsAbove()) {
                    top = targetRect.top - tooltipRect.height - margin
                    left = Math.max(
                        0,
                        Math.min(
                            viewportWidth - tooltipRect.width,
                            targetRect.left + targetRect.width / 2 - tooltipRect.width / 2
                        )
                    )
                    position = "top"
                } else {
                    top = targetRect.bottom + margin
                    left = Math.max(
                        0,
                        Math.min(
                            viewportWidth - tooltipRect.width,
                            targetRect.left + targetRect.width / 2 - tooltipRect.width / 2
                        )
                    )
                    position = "bottom"
                }
                break
        }

        return { top, left, position }
    }
})
