window.onload = function () {
    const htmlBox = document.getElementById("html")
    const cssBox = document.getElementById("css")
    const jsBox = document.getElementById("js")

    const chevron1 = document.getElementById("chevron1")
    const chevron2 = document.getElementById("chevron2")
    const chevron3 = document.getElementById("chevron3")

    htmlBox.addEventListener("click", async () => {
        htmlBox.classList.toggle("open")
        chevron1.classList.toggle("open")
    })
    cssBox.addEventListener("click", async () => {
        cssBox.classList.toggle("open")
        chevron2.classList.toggle("open")
    })
    jsBox.addEventListener("click", async () => {
        jsBox.classList.toggle("open")
        chevron3.classList.toggle("open")
    })
}