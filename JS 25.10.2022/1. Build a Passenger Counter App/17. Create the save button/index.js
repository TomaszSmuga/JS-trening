let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called

let logOut = document.getElementById("save-btn")

function save() {
    console.log(count)
}

