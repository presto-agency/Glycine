export const languageSelect = () => {
    const customSelect = document.querySelector(".language-select-container")
    const selected = customSelect.querySelector(".select-selected")
    const selectItems = customSelect.querySelector(".select-items")

    selected.addEventListener("click", function () {
        this.classList.toggle("active")
    })

    selectItems.querySelectorAll("div").forEach((item) => {
        item.addEventListener("click", function () {
            selected.textContent = this.textContent
            selected.classList.remove("active")
        })
    })
}
