const countBtn = document.querySelector(".countBtn button");
const resetBtn = document.querySelector(".resetBtn button");
let countNum = document.querySelector(".countNum h1");

countBtn.addEventListener('click', countUp);
resetBtn.addEventListener("click", reset);

function countUp(){
    countNum.innerHTML++;
}

function reset() {
    countNum.innerHTML = 0;
}