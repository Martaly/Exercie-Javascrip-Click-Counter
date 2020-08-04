const countUp = document.querySelector(".countUp button");
const countDown = document.querySelector(".countDown button");

const resetBtn = document.querySelector(".resetBtn button");
let countNum = document.querySelector(".countNum h1");

countUp.addEventListener('click', countPlus);
countDown.addEventListener("click", countMinus);
resetBtn.addEventListener("click", reset);

function countPlus(){
    countNum.innerHTML++;
}

function countMinus() {
    countNum.innerHTML--;
}

function reset() {
    countNum.innerHTML = 0;
}