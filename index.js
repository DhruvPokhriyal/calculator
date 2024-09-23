function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            sum(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
}

function showOperation(e) {
    resultBox = document.querySelector(".numeric-result");
    buttonClicked = e.target.textContent;
    resultBox.textContent += buttonClicked;
    // console.log(buttonClicked);
}

numberButtonList = Array.from(document.querySelectorAll(".numbers,.operator"));
for (let button of numberButtonList) {
    button.addEventListener("click", showOperation);
}

function allClear(e) {
    resultBox = document.querySelector(".numeric-result");
    resultBox.textContent = "";
}

const ac = document.querySelector(".clear");
ac.addEventListener("click", allClear);
