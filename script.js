const text = document.querySelector("#text")
const btn = document.querySelector("#button")
const box = document.querySelector("div")

let count = 0
btn.onclick = () => {
    count += 1
    text.textContent = count
    if (count%2==1) {
        let boxStyle = window.getComputedStyle(box)
        box.style.left = boxStyle.right
    } else {
        let boxStyle = window.getComputedStyle(box)
        box.style.top = boxStyle.bottom
    }
}

