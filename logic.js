let result = 0;
let firstOperation = true;
let operation = "";
const d = document.querySelector(".result");
let isResult = false;

function sum(input) {
    let i = parseInt(input);
    result += i;
}

function multiply(input) {
    let i = parseInt(input);
    if (firstOperation) {
        result = input;
        return;
    }
    result *= i;
}

function minus(input) {
    let i = parseInt(input);
    if (firstOperation) {
        result = input;
        return;
    }
    result -= i;
}

function divisor(input) {
    let i = parseInt(input);
    if (firstOperation) {
        result = input;
        return;
    }
    result /= i;
}

function clear() {
    let clear = document.querySelector(".clear");
    clear.addEventListener("click", function () {
        d.innerText = "0";
        result = 0;
        firstOperation = true;
    });
}

function zero() {
    let zero = document.querySelector("#zero");
    zero.addEventListener("click", function () {
        if (!displayIsClear()) {
            d.innerText = d.innerText + "0"
        }
    });
}

function teclado() {
    let num = document.querySelector(".num");
    num.addEventListener("click", function (num) {
        if (displayIsClear()) {
            d.innerText = num.target.innerText;
            return;
        }
        d.innerText = d.innerText + num.target.innerText;
    });
}

function displayIsClear() {
    let displayNum = document.querySelector(".result");
    return displayNum.innerText === "0";
}

function doOperations() {
    let operators = document.querySelector(".operator");
    operators.addEventListener("click", function (op) {

        if (isResult) {
            operation = op.target.innerText;
            isResult = false;
            d.innerText = "0";
            return;
        }

        //1
        let input = parseInt(d.innerText);

        //2
        if (!(op.target.innerText === "=")) {
            operation = op.target.innerText;
        }

        //3
        if (op.target.innerText === "=") {
            makeOperation(operation, input);
            d.innerText = result;
            operation = null;
            isResult = true;
        } else {
            makeOperation(operation, input);
            d.innerText = "0";
        }

        firstOperation = false;

    });
}

function makeOperation(operator, input) {
    if (operator === "+") {
        sum(input);
    } else if (operator === "-") {
        minus(input);
    } else if (operator === "x") {
        multiply(input);
    } else if (operator === "&#247;") {
        divisor(input);
    }
}

teclado();
zero();
doOperations();
clear();
