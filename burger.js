window.onload = function() {
    const burger = document.getElementById("burger")
    const nav = document.getElementById("nav")
    burger.addEventListener("click", async () => {
        nav.classList.toggle("active")
        console.log("Test")
    })

    const burgerContainer = document.getElementById("burger-container")
    burgerContainer.addEventListener("click", async () => {
        burgerContainer.classList.toggle("open")
    })
}