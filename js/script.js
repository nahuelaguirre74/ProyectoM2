//Este espacio es para escribir el JS y darle funcion a la calculadora

let operador = '';
let valorAnterior = 0;
let valorActual = 0;
let borrador = 0;

function agregarNumero(numero) {
    valorActual = valorActual * 10 + numero;
    actualizarPantalla();
}

function operacion(op) {
    operador = op;
    valorAnterior = valorActual;
    valorActual = 0;
}

function borrar(b) {
    //borrador = b;
    //valorAnterior = valorActual;
    valorActual = 0;
    actualizarPantalla();
}

function raiz() {
    valorActual = Math.sqrt(valorActual);
    actualizarPantalla();
}

function calcular() {
    if (operador === '+') {
        valorActual = valorAnterior + valorActual;
    } else if (operador === '-') {
        valorActual = valorAnterior - valorActual;
    } else if (operador === '*') {
        valorActual = valorAnterior * valorActual;
    } else if (operador === '/') {
        valorActual = valorAnterior / valorActual;
    }
    actualizarPantalla();
    valorAnterior = 0;
}

function actualizarPantalla() {
    document.getElementById('pantalla').textContent = valorActual;
}