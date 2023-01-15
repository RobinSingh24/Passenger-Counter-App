// javascript

let countEl = document.getElementById("count-el")
let count = countEl.innerText;

let saveEl = document.getElementById("save-el");

function increment(){
    count++;
    countEl.textContent = count;
}

function save(){
    saveEl.textContent += count+" - "
    count = countEl.textContent = 0
}
