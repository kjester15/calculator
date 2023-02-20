const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const percentage = document.getElementById('percentage');
const divide = document.getElementById('divide');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const add = document.getElementById('add');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const subtract = document.getElementById('subtract');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const multiply = document.getElementById('multiply');
const zero = document.getElementById('zero');
const point = document.getElementById('point');
const equal = document.getElementById('equal');
const currentNumber = document.getElementById('currentNumber');
const runningTotal = document.getElementById('runningTotal');

let number1 = 0;
let number2 = 0;
let answer = 0;
let currentOperator = '';
let lastClicked = '';

// event listener for all buttons except clear, backspace, percentage and equal
const populateButtons = Array.from(document.querySelectorAll('.populate'));
populateButtons.forEach(button => button.addEventListener('click', populateDisplay));

// event listener for all operator buttons
const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(operator => operator.addEventListener('click', updateRunningTotal));

// event listeners for clear, and backspace
clear.addEventListener('click', clearDisplay);
backspace.addEventListener('click', backspaceDisplay);

// event listener for percentage
percentage.addEventListener('click', createPercentage);

// event listener for lastClicked
const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => button.addEventListener('click', setLastClicked));


function createPercentage () {
    let newPercentage = currentNumber.innerHTML / 100;
    currentNumber.innerHTML = newPercentage;
}

function setLastClicked () {
    lastClicked = this.innerHTML;
}

function updateRunningTotal () {
    // don't allow operators to be clicked more than once
    if (lastClicked == '+' || lastClicked == '-' || lastClicked == '/' || lastClicked == 'x' || lastClicked == '=') {
        return;
    }
    
    // don't allow calculation without entering a number
    if (currentNumber == '') {
        return;
    }
    else {
        if (runningTotal.innerHTML == '') {
            number1 = Number(currentNumber.innerHTML);
        }
        else {
            number2 = Number(currentNumber.innerHTML);
            answer = Math.round((operate(number1, number2, currentOperator) + Number.EPSILON) * 100) / 100;
            number1 = answer;
            number2 = 0;
        }
        
        // updates running total with operator or without equal sign depending on which is clicked
        if (this.innerHTML != '=') {
            let newRunningTotal = runningTotal.innerHTML + ' ' + currentNumber.innerHTML + ' ' + this.innerHTML;
            runningTotal.innerHTML = newRunningTotal;
        }
        else if (this.innerHTML == '=') {
            let newRunningTotal = runningTotal.innerHTML + ' ' + currentNumber.innerHTML + ' ';
            runningTotal.innerHTML = newRunningTotal;
        }

        // displays answer in currentNumber when equal is clicked
        if (this.innerHTML == '=') {
            currentNumber.innerHTML = answer;
        }
        else {
            currentNumber.innerHTML = '';
        }
        
        // assigns clicked operator to currentOperator variable
        currentOperator = this.innerHTML;
    }
};

function backspaceDisplay() {
    if (currentNumber.innerHTML.length == 1) {
        let currentArray = Array.from(currentNumber.innerHTML);
        currentArray.pop();
        currentNumber.innerHTML = '';
    }
    else {
        let currentArray = Array.from(currentNumber.innerHTML);
        currentArray.pop();
        let currentString = currentArray.join('');
        currentNumber.innerHTML = currentString;
    }
};

function clearDisplay() {
    currentNumber.innerHTML = '';
    runningTotal.innerHTML = '';
};

function checkDisplay(value) {
    const regex = /[1234567890.]/;
    if (regex.test(value.innerHTML)) {
        return true;
    }
    else {
        return false;
    }
};

function populateDisplay() {
    if (currentNumber.innerHTML == '0') {
        currentNumber.innerHTML = this.innerHTML;
    }
    else if (checkDisplay(this)) {
        currentNumber.innerHTML += this.innerHTML;
    }
    else {
        currentNumber.innerHTML = this.innerHTML;
    }
};

function addNum(a, b) {
    return a + b;
};

function subtractNum(a, b) {
    return a - b;
};

function multiplyNum(a, b) {
    return a * b;
};

function divideNum(a, b) {
    return a / b;
};

function operate(a, b, operator) {
    switch(operator) {
        case '+':
            return addNum(a,b);
        case '-':
            return subtractNum(a,b);
        case 'x':
            return multiplyNum(a,b);
        case '/':
            return divideNum(a,b);
    }
}