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
            if (num.target.innerText === "0") {
                return;
            }
            d.innerText = num.target.innerText;
            return;
        }
        d.innerText = d.innerText + num.target.innerText;
    });

    let clear = document.querySelector(".clear");
    clear.addEventListener("click", function () {
        d.innerText = "0";
        result = 0;
        firstInput = true;
    });

    let operators = document.querySelector(".operator");
    operators.addEventListener("click", function (op) {

        let input = parseInt(d.innerText);

        if (firstInput) {
            result = input;
            d.innerText = "0";
            operation = op.target.innerText;
            firstInput = false;
            return;

        }

        if (isResult) {
            isResult = false;
            d.innerText = "0";
            operation = op.target.innerText;
            return;
        }

        if (op.target.innerText === "=") {
            makeOperation(operation, input);
            d.innerText = result;
            operation = null;
            isResult = true;
        } else {
            makeOperation(operation, input);
            d.innerText = "0";
        }

        if (!(op.target.innerText === "=")) {
            operation = op.target.innerText;
        }

    });

}

function displayIsClear() {
    let displayNum = document.querySelector(".result");
    return displayNum.innerText === "0";
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
