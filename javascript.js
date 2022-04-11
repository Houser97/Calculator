let valor = "";

function addValue(evento, value = valor, screen = display){
    value += evento.target.classList[1]
    screen.textContent += value
    console.log(value);
}

const numero = document.querySelectorAll('.tecla');
numero.forEach(valor => valor.addEventListener('click', addValue));

const display = document.querySelector('.display');
