function sum(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function operate(num1, num2, operator) {
    let output;
    switch (operator) {
        case "+":
            output = sum(num1, num2);
            break;
        case "-":
            output = subtract(num1, num2);
            break;
        case "*":
            output = multiply(num1, num2);
            break;
        case "/":
            output = divide(num1, num2);
            break;
    }
    console.log(output);
}

function showOperation(e) {
    const resultBox = document.querySelector(".numeric-result");
    const buttonClicked = e.target.textContent;
    resultBox.textContent += buttonClicked;
    // console.log(buttonClicked);
}

numberButtonList = Array.from(document.querySelectorAll(".numbers,.operator"));
for (let button of numberButtonList) {
    button.addEventListener("click", showOperation);
}

function allClear(e) {
    const resultBox = document.querySelector(".numeric-result");
    resultBox.textContent = "";
}

function resultEvaluation(e) {
    const resultBox = document.querySelector(".numeric-result");
    let data = resultBox.textContent;
    let listedData = [];
    for (let i = 0; i < data.length; i++) {
        elem = data[i];
        if ("+-*/".includes(elem)) {
            listedData = data.split(elem);
            listedData.push(elem);
            break;
        }
    }
    console.log(listedData);
    operate(...listedData);
}

const evaluator = document.querySelector(".result-calculation");
evaluator.addEventListener("click", resultEvaluation);
const ac = document.querySelector(".clear");
ac.addEventListener("click", allClear);
