let result = 0;
let firstInput = true;
let operation = "";
const d = document.querySelector(".result");
let isResult = false;

function clear() {
    let clear = document.querySelector(".clear");
    clear.addEventListener("click", function () {
        d.innerText = "0";
        result = 0;
        firstInput = true;
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

    let zero = document.querySelector("#zero");
    zero.addEventListener("click", function () {
        if (!displayIsClear()) {
            d.innerText = d.innerText + "0"
        }
    });
}

function displayIsClear() {
    let displayNum = document.querySelector(".result");
    return displayNum.innerText === "0";
}

function doOperations() {
    let operators = document.querySelector(".operator");
    operators.addEventListener("click", function (op) {

        //1
        let input = parseInt(d.innerText);
        console.log("THIS IS THE INPUT " + input);

        if (firstInput) {
            console.log("I AM IN THE FIRST OPERATION")
            result = input;
            console.log("RESULTADO: " + result);
            d.innerText = "0";
            operation = op.target.innerText;
            firstInput = false;
            return;

        }
        console.log("I AM NOR IN FIRST OPERATION SECTION");

        if (isResult) {
            console.log("IN IS RESULT SECTION 1");
            isResult = false;
            d.innerText = "0";
            console.log("RESULTADO: " + result);
            operation = op.target.innerText;
            return;
        }

        if (op.target.innerText === "=") {
            console.log("IN IS RESULT SECTION 2");
            makeOperation(operation, input);
            console.log("RESULTADO: " + result);
            d.innerText = result;
            operation = null;
            isResult = true;
        } else {
            makeOperation(operation, input);
            console.log("RESULTADO: " + result);
            d.innerText = "0";
        }

        if (!(op.target.innerText === "=")) {
            operation = op.target.innerText;
            console.log("THIS IS THE OPERATION " + operation);
        }

    });
}

function makeOperation(operator, input) {
    if (operator === "+") {
        result += input;
    } else if (operator === "-") {
        result -= input;
    } else if (operator === "x") {
        result *= input;
    } else if (operator === "÷") {
        result /= input;
    }
}

teclado();
doOperations();
clear();
