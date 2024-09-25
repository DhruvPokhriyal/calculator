let history = [];
let numString = "";
let OPERATOR_STRING = "+-*/";

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
    switch (operator) {
        case "+":
            return sum(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

function showOperation(e) {
    const resultBox = document.querySelector(".numeric-result");
    const buttonClicked = e.target.textContent;

    if (OPERATOR_STRING.includes(buttonClicked)) {
        // If an operator is clicked, push the current numberString and the operator
        if (numString) {
            history.push(numString);
            numString = "";
        }
        history.push(buttonClicked);
    } else {
        // If a number is clicked, append it to numString
        numString += buttonClicked;
    }

    // Display the current clicked button
    resultBox.textContent += buttonClicked;
}

function allClear() {
    const resultBox = document.querySelector(".numeric-result");
    resultBox.textContent = "";
    history = [];
    numString = "";
}

function resultEvaluation() {
    const resultBox = document.querySelector(".numeric-result");

    if (numString) {
        history.push(numString);
    }

    if (history.length >= 3) {
        let result = operate(history[0], history[1], history[2]);

        // Handle further chained operations
        for (let i = 3; i < history.length; i += 2) {
            result = operate(result, history[i], history[i + 1]);
        }

        resultBox.textContent = result;
        history = [result]; // Store the result in history for further operations
        numString = "";
    }
}

numberButtonList = Array.from(document.querySelectorAll(".numbers,.operator"));
for (let button of numberButtonList) {
    button.addEventListener("click", showOperation);
}

const evaluator = document.querySelector(".result-calculation");
evaluator.addEventListener("click", resultEvaluation);

const ac = document.querySelector(".clear");
ac.addEventListener("click", allClear);
