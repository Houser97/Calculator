let valor = "";
let lengthFirstValu = 0;
let lengthSecondValu = 0;

function addValue(evento, value = valor, screen = display, lengthFirstValue = lengthFirstValu, lengthSecondValue = lengthSecondValu){
    let firstValue;
    let secondValue;

    let operator = evento.target.classList[2];

    value = evento.target.classList[1];

    if(value == 'igual'){
        lengthSecondValue = screen.textContent.length;
        lengthSecondValu = lengthSecondValue;
        secondValue = parseInt(screen.textContent.substring(lengthFirstValue+1));
    }

    screen.textContent += value;

    if(operator != 'tecla' && value != 'igual'){
        lengthFirstValue = screen.textContent.length-1;
        lengthFirstValu = lengthFirstValue;
        firstValue = parseInt(screen.textContent.substring(0,lengthFirstValue));
    }

    console.log(secondValue);
}

function deleteValue(evento, screen = display){
    positionToKeep = screen.textContent.length-1;
    screen.textContent = screen.textContent.substring(0,positionToKeep);
}

function eraseAll(event, screen = display){
    screen.textContent = "";
}

const numero = document.querySelectorAll('.tecla');
numero.forEach(valor => valor.addEventListener('click', addValue));

const display = document.querySelector('.display');

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', deleteValue);

const CE = document.querySelector('.CE');
CE.addEventListener('click', eraseAll);
