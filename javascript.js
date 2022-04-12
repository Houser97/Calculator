let valor = "";
let lengthFirstValu = 0;
let lengthSecondValu = 0;
let operatorGlobal = "";
let firstValu = 0;
let secondValu = 0;
let counterOperator = 0;
let counterPoint = 0;

function addValue(evento, value = valor, screen = display, 
    lengthFirstValue = lengthFirstValu, lengthSecondValue = lengthSecondValu, 
    operator = operatorGlobal, firstValue = firstValu, secondValue = secondValu,
    counterOperato = counterOperator){


    let operatorRecognize = evento.target.classList[2];

    value = evento.target.classList[1];
    let point = evento.target.classList[3];

    if(point == 'punto'){
        counterPoint += 1;
    }

    if(point == 'punto' && counterPoint >=2){
        return;
    }
    
    if(value == 'igual'){
        counterOperato = 0;
        counterOperator = 0;
        lengthSecondValue = screen.textContent.length;
        lengthSecondValu = lengthSecondValue;
        secondValue = parseFloat(screen.textContent.substring(lengthFirstValue+1));
        secondValu = secondValue;

        operation(operator, firstValue, secondValue);
        return; // it helps to prevent the equal symbol to be displayed

    }

    screen.textContent += value;

    if(operatorRecognize != 'tecla' && value != 'igual'){
        counterOperator += 1;
        counterOperato += 1;
        counterPoint = 0;
        
        if(counterOperato == 2){
            counterOperato = 1;
            counterOperator = 1;
            lengthSecondValue = screen.textContent.length;
            lengthSecondValu = lengthSecondValue;
            secondValue = parseFloat(screen.textContent.substring(lengthFirstValue+1));
            secondValu = secondValue;
            operation(operator, firstValue, secondValue);
            screen.textContent += value;
        } 
        lengthFirstValue = screen.textContent.length-1;
        lengthFirstValu = lengthFirstValue;
        firstValue = parseFloat(screen.textContent.substring(0,lengthFirstValue));
        firstValu = firstValue;
        operator = operatorRecognize;
        operatorGlobal = operator; 
    
        
    }
    
}

function deleteValue(evento, screen = display, firstValue = firstValu, secondValue = secondValu){
    let positionToKeep = screen.textContent.length-1;
    let elementToDelete = screen.textContent.substring(positionToKeep);

    if(elementToDelete == '.'){
        counterPoint = 0;
    }

    screen.textContent = screen.textContent.substring(0,positionToKeep);
}

function eraseAll(event, screen = display){
    screen.textContent = "";
    valor = "";
    lengthFirstValu = 0;
    lengthSecondValu = 0;
    operatorGlobal = "";
    firstValu = 0;
    secondValu = 0;
    counterOperator = 0;
    counterPoint = 0;
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
    let result = Math.round(1000*(a+b))/1000;
    screen.textContent = result;
    return a+b;
  };

function subtract(a,b, screen = display) {
    let result = Math.round(1000*(a-b))/1000;
    screen.textContent = result;
    return a-b;
  };

function multiply(a,b, screen = display) {
    let result = Math.round(1000*(a*b))/1000;;
    screen.textContent = result;
    return a*b;
  };

function div(a,b, screen = display) {
    let result = Math.round(1000*(a/b))/1000;
    if(result == 'Infinity'){
        screen.textContent = 'ERROR'; 
    } else {
        screen.textContent = result;
    }
    return a/b;
  };


const numero = document.querySelectorAll('.tecla');
numero.forEach(valor => valor.addEventListener('click', addValue));

const display = document.querySelector('.display');

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', deleteValue);

const CE = document.querySelector('.CE');
CE.addEventListener('click', eraseAll);
