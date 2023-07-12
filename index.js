
let count = 0
let countEl = document.getElementById("count-el")

perEL = document.getElementById("per-el")
console.log(count)
function increment() {
    count += 1
    console.log(count)
    countEl.textContent = count
}


function reset(){

    count = 0
    countEl.textContent = count
    perEL.textContent = " Previous Entries: "
}
function restart(){

    count = 0
    countEl.textContent = count
}
function save() {

perEL.textContent += count + " - "
restart()

}