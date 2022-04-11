let valor = "";

function addValue(evento, value = valor, screen = display){
    value = evento.target.classList[1];
    screen.textContent += value;
    console.log(value);
}

function deleteValue(evento, screen = display){
    positionToKeep = screen.textContent.length-1;
    screen.textContent = screen.textContent.substring(0,positionToKeep);
}

const numero = document.querySelectorAll('.tecla');
numero.forEach(valor => valor.addEventListener('click', addValue));

const display = document.querySelector('.display');

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', deleteValue);
