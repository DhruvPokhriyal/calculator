let history = [];

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

function operate(num1, operator, num2) {
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
    return output;
}

function showOperation(e) {
    const resultBox = document.querySelector(".numeric-result");
    const buttonClicked = e.target.textContent;
    resultBox.textContent += buttonClicked;
    history.push(buttonClicked);
    // console.log(buttonClicked);
}

numberButtonList = Array.from(document.querySelectorAll(".numbers,.operator"));
for (let button of numberButtonList) {
    button.addEventListener("click", showOperation);
}

function allClear(e) {
    const resultBox = document.querySelector(".numeric-result");
    resultBox.textContent = "";
    history = [];
}

function resultEvaluation(e) {
    // // const resultBox = document.querySelector(".numeric-result");
    // let data = history;
    // let listedData = [];
    // for (let i = 0; i < data.length; i++) {
    //     elem = data[i];
    //     if ("+-*/".includes(elem)) {
    //         listedData = data.split(elem);
    //         listedData.push(elem);
    //     }
    // }
    // // if (listedData.length > 3) {
    // //     let operatedOutput = operate(...listedData.slice(0, 3));
    // //     resultBox.textContent = String(operatedOutput) + listedData[3];
    // //     return;
    // // }
    // // console.log(listedData);
    // let evaluatedResult = operate(...listedData);
    // resultBox.textContent = evaluatedResult;
    if (history.length >= 3) {
        const resultBox = document.querySelector(".numeric-result");
        let result = operate(history[0], history[1], history[2]);
        history.splice(0, 3, result);
        console.log(result);
        console.log(history);
        resultBox.textContent = result;
    }
}

const evaluator = document.querySelector(".result-calculation");
evaluator.addEventListener("click", resultEvaluation);
const ac = document.querySelector(".clear");
ac.addEventListener("click", allClear);
