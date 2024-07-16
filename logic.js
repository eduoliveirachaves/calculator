let result = 0;
let operation = "";
const d = document.querySelector(".result");
let displayNum = d.innerText;


function sum(input) {
    let i = parseInt(input);
    result += i;
}


function multiply(input) {
    result *= input;
    return result;
}

function minus(input) {
    result -= input;
    return result;
}

function divisor(input) {
    result /= input;
    return result;
}

function clear() {
    result = 0;
    let clear = document.querySelector(".clear");
    clear.addEventListener("click", function () {
        d.innerText = "0";
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
    return displayNum.innerText === '0';
}

function doOperations() {
    let operators = document.querySelector(".operator");

    operators.addEventListener("click", function (op) {

        if (!(op.target.innerText === "=")) {
            operation = op.target.innerText;
        }

        if (op.target.innerText === "=") {
            whichOperator(operation)
            d.innerText = result;
        } else {
            whichOperator(operation);
            d.innerText = "0";
        }

    });

}

function whichOperator(operator) {
    if (operator === "+") {
        sum(d.innerText);
    } else if (operator === "-") {
        minus(displayNum);
    } else if (operator === "x") {
        multiply(displayNum);
    } else if (operator === "&#247;") {
        divisor(displayNum);
    }
}

teclado();
zero();
clear();
doOperations(false);
