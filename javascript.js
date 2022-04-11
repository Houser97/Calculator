let valor = "";

function addValue(evento, value = valor, screen = display){
    let firstValue = 0;
    let secondValue = 0;
    let lengthValue;
    let operator = evento.target.classList[2];

    value = evento.target.classList[1];
    screen.textContent += value;

    if(operator != 'tecla'){
        lengthValue = screen.textContent.length-1;
        firstValue = parseInt(screen.textContent.substring(0,lengthValue));
    }

    console.log(lengthValue);
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
