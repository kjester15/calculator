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

const buttons = Array.from(document.querySelectorAll('.populate'));
buttons.forEach(button => button.addEventListener('click', populateDisplay));

clear.addEventListener('click', clearDisplay);


// clear.addEventListener('click', [insert function]);
// backspace.addEventListener('click', [insert function]);
// percentage.addEventListener('click', [insert function]);
// divide.addEventListener('click', [insert function]);
// seven.addEventListener('click', [insert function]);
// eight.addEventListener('click', [insert function]);
// nine.addEventListener('click', [insert function]);
// add.addEventListener('click', [insert function]);
// four.addEventListener('click', [insert function]);
// five.addEventListener('click', [insert function]);
// six.addEventListener('click', [insert function]);
// subtract.addEventListener('click', [insert function]);
// one.addEventListener('click', [insert function]);
// two.addEventListener('click', [insert function]);
// three.addEventListener('click', [insert function]);
// multiply.addEventListener('click', [insert function]);
// zero.addEventListener('click', [insert function]);
// point.addEventListener('click', [insert function]);
// equal.addEventListener('click', [insert function]);

function clearDisplay() {
    currentNumber.innerHTML = '0';
    runningTotal.innerHTML = '';
}

function checkDisplay(value) {
    const regex = /[1234567890,]/;
    if (regex.test(value.innerHTML)) {
        return true;
    }
    else {
        return false;
    }
}

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
}

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