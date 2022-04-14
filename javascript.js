let valor = "";
let lengthFirstValue = 0;
let lengthSecondValue = 0;
let operator = "";
let operatorRecognize = '';
let firstValue = 0;
let secondValue = 0;
let counterOperator = 0;
let counterPoint = 0;
let point = '';

// ------------------------Functions---------------------------------------------//

function addValue(evento, screen = display){
    operatorRecognize = evento.target.classList[2];
    valor = evento.target.classList[1];
    point = evento.target.classList[3];

    if(point == 'punto'){
        counterPoint += 1;
    }

    if(point == 'punto' && counterPoint >=2){
        return;
    }
    
    if(valor == 'igual'){
        counterOperator = 0;
        getSecondValue();
        operation(operator, firstValue, secondValue);
        return; // it helps to prevent the equal symbol from being displayed
    }

    screen.textContent += valor;

    if(operatorRecognize != 'tecla' && valor != 'igual'){
        counterOperator += 1;
        counterPoint = 0;
        
        if(counterOperator == 2){
            counterOperator = 1;
            getSecondValue();
            operation(operator, firstValue, secondValue);
            screen.textContent += valor;
        } // Not placing an ELSE here helps the calculator to carry on more operations after the firs result.
        
        getFirstValue();
        operator = operatorRecognize;
    }
    
}

function deleteValue(evento, screen = display){
    let positionToKeep = screen.textContent.length-1;
    let elementToDelete = screen.textContent.substring(positionToKeep);

    if(elementToDelete == '.'){
        counterPoint = 0;
    }

    if(elementToDelete == '+' || elementToDelete == '-' || elementToDelete == 'x' ||
    elementToDelete == '/'){
        if(counterOperator >= 2){
            counterOperator = 1;
        } else{
            counterOperator = 0;
        }
    }

    screen.textContent = screen.textContent.substring(0,positionToKeep);
};

function eraseAll(event, screen = display){
    screen.textContent = "";
    valor = "";
    lengthSecondValue = 0;
    lengthFirstValue = 0;
    operator = "";
    firstValue = 0;
    secondValue = 0;
    counterOperator = 0;
    counterPoint = 0;
};

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
};

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

function getFirstValue(screen = display){
    lengthFirstValue = screen.textContent.length-1;
    firstValue = parseFloat(screen.textContent.substring(0,lengthFirstValue));
};

function getSecondValue(screen = display){
    lengthSecondValue = screen.textContent.length;
    secondValue = parseFloat(screen.textContent.substring(lengthFirstValue+1));
}

// ---------------------------------------------------------------------//

const numero = document.querySelectorAll('.tecla');
numero.forEach(valor => valor.addEventListener('click', addValue));

const display = document.querySelector('.display');

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', deleteValue);

const CE = document.querySelector('.CE');
CE.addEventListener('click', eraseAll);
