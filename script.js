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

// event listener for all buttons except clear, backspace, and enter
const buttons = Array.from(document.querySelectorAll('.populate'));
buttons.forEach(button => button.addEventListener('click', populateDisplay));

// event listener for all operator buttons
const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(operator => operator.addEventListener('click', updateRunningTotal));

// event listeners for clear, backspace, and enter
clear.addEventListener('click', clearDisplay);
backspace.addEventListener('click', backspaceDisplay);

function updateRunningTotal () {
    let newRunningTotal = runningTotal.innerHTML + ' ' + currentNumber.innerHTML + ' ' + this.innerHTML;
    runningTotal.innerHTML = newRunningTotal;
    currentNumber.innerHTML = '0';
};

function backspaceDisplay() {
    if (currentNumber.innerHTML.length == 1) {
        let currentArray = Array.from(currentNumber.innerHTML);
        currentArray.pop();
        currentNumber.innerHTML = '0';
    }
    else {
        let currentArray = Array.from(currentNumber.innerHTML);
        currentArray.pop();
        let currentString = currentArray.join('');
        currentNumber.innerHTML = currentString;
    }
};

function clearDisplay() {
    currentNumber.innerHTML = '0';
    runningTotal.innerHTML = '';
};

function checkDisplay(value) {
    const regex = /[1234567890,]/;
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
        case '*':
            return multiplyNum(a,b);
        case '/':
            return divideNum(a,b);
    }
}