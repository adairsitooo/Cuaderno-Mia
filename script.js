const textoCarta = `Feliz cumpleaños niña linda, felices 17 años. Gracias por todo lo que compartimos, eres una niña súper especial.

`;

const btnComenzar = document.getElementById('btn-comenzar');
const contenedorTexto = document.getElementById('texto-lapiz');
const contenedorCuaderno = document.getElementById('cuaderno');
const seccionPastel = document.getElementById('seccion-pastel');

let indiceChar = 0;
const VELOCIDAD_ESCRITURA = 25; // Velocidad fluida para simular el trazo a lápiz

btnComenzar.addEventListener('click', () => {
    btnComenzar.style.display = 'none';
    empezarEfectoLapiz();
});

function empezarEfectoLapiz() {
    if (indiceChar < textoCarta.length) {
        contenedorTexto.textContent += textoCarta.charAt(indiceChar);
        indiceChar++;
        
        // Auto-scroll para seguir el renglón activo en la hoja rayada
        contenedorTexto.parentElement.scrollTop = contenedorTexto.parentElement.scrollHeight;
        
        setTimeout(empezarEfectoLapiz, VELOCIDAD_ESCRITURA);
    } else {
        // Al terminar, espera 2.5 segundos para apreciar el texto y desplaza
        setTimeout(activarTransicionPastel, 2500);
    }
}

function activarTransicionPastel() {
    // Desplaza el cuaderno hacia arriba sacándolo de la ventana por completo
    contenedorCuaderno.classList.add('desplazar-arriba');
    
    // Hace aparecer de fondo el pastel de cumpleaños detallado
    seccionPastel.classList.remove('oculto');
    setTimeout(() => {
        seccionPastel.classList.add('mostrar');
    }, 100);
}
