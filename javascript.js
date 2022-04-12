let valor = "";
let lengthFirstValu = 0;
let lengthSecondValu = 0;
let operatorGlobal = "";
let firstValu = 0;
let secondValu = 0;

function addValue(evento, value = valor, screen = display, 
    lengthFirstValue = lengthFirstValu, lengthSecondValue = lengthSecondValu, 
    operator = operatorGlobal, firstValue = firstValu, secondValue = secondValu){


    let operatorRecognize = evento.target.classList[2];

    value = evento.target.classList[1];

    if(value == 'igual'){
        lengthSecondValue = screen.textContent.length;
        lengthSecondValu = lengthSecondValue;
        secondValue = parseInt(screen.textContent.substring(lengthFirstValue+1));
        secondValu = secondValue;

        operation(operator, firstValue, secondValue);
        return;

    }

    screen.textContent += value;

    if(operatorRecognize != 'tecla' && value != 'igual'){
        lengthFirstValue = screen.textContent.length-1;
        lengthFirstValu = lengthFirstValue;
        firstValue = parseInt(screen.textContent.substring(0,lengthFirstValue));
        firstValu = firstValue;
        operator = operatorRecognize;
        operatorGlobal = operator;
    }

    console.log(firstValue)
    console.log(secondValue);
}

function deleteValue(evento, screen = display){
    positionToKeep = screen.textContent.length-1;
    screen.textContent = screen.textContent.substring(0,positionToKeep);
}

function eraseAll(event, screen = display){
    screen.textContent = "";
}

function operation(operator, firstValue, secondValue){
    switch(operator) {
        case "mas":
            add(firstValue, secondValue);
            break;

        case "menos":
            subtract(firstValue, secondValue);
            break;

        case "mult":
            multiply(firstValue, secondValue);
            break;

        case "division":
            div(firstValue, secondValue);
            break;
    }
}

function add(a,b, screen = display) {
    let result = a+b;
    screen.textContent = result;
    return a+b;
  };

function subtract(a,b, screen = display) {
    let result = a-b;
    screen.textContent = result;
    return a-b;
  };

function multiply(a,b, screen = display) {
    let result = a*b;
    screen.textContent = result;
    return a*b;
  };

function div(a,b, screen = display) {
    let result = a/b;
    screen.textContent = result;
    return a/b;
  };


const numero = document.querySelectorAll('.tecla');
numero.forEach(valor => valor.addEventListener('click', addValue));

const display = document.querySelector('.display');

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', deleteValue);

const CE = document.querySelector('.CE');
CE.addEventListener('click', eraseAll);
