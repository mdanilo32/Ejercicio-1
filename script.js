// Archivo: script.js
const boton = document.getElementById('boton');
const texto = document.getElementById('texto');
const titulo = document.getElementById('titulo');

const textosAlternativos = [
    "El texto ha cambiado, ¡bien hecho!",
    "Sigue haciendo clic, ¡hay más!",
    "¡Esto es divertido, verdad?",
    "¡Increíble, sigue adelante!",
    "Has encontrado todos los mensajes."
];

let indiceTexto = 0;

boton.addEventListener('click', function() {
    texto.textContent = textosAlternativos[indiceTexto];
    indiceTexto = (indiceTexto + 1) % textosAlternativos.length;
});

titulo.addEventListener('mouseover', function() {
    titulo.style.color = '#FF5722';
});

titulo.addEventListener('mouseout', function() {
    titulo.style.color = '#4CAF50';
});
