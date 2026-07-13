const textoCarta = `Feliz cumpleaños niña linda, felices 17 años. Gracias por todo lo que compartimos, eres una niña súper especial.`;

const btnComenzar = document.getElementById('btn-comenzar');
const contenedorTexto = document.getElementById('texto-lapiz');
const contenedorCuaderno = document.getElementById('cuaderno');
const seccionPastel = document.getElementById('seccion-pastel');

let indiceChar = 0;
const VELOCIDAD_ESCRITURA = 25;

btnComenzar.addEventListener('click', () => {
    btnComenzar.style.display = 'none';
    empezarEfectoLapiz();
});

function empezarEfectoLapiz() {
    if (indiceChar < textoCarta.length) {
        contenedorTexto.textContent += textoCarta.charAt(indiceChar);
        indiceChar++;
        contenedorTexto.parentElement.scrollTop = contenedorTexto.parentElement.scrollHeight;
        setTimeout(empezarEfectoLapiz, VELOCIDAD_ESCRITURA);
    } else {
        setTimeout(activarTransicionPastel, 2000);
    }
}

function activarTransicionPastel() {
    // 1. Desplazar visualmente
    contenedorCuaderno.classList.add('desplazar-arriba');
    
    // 2. Bloquear eventos del cuaderno para que no interfiera
    contenedorCuaderno.style.pointerEvents = 'none';
    
    // 3. Mostrar pastel
    seccionPastel.classList.remove('oculto');
    seccionPastel.classList.add('mostrar');

    // 4. Ocultar el cuaderno totalmente después de la animación (1.6s)
    setTimeout(() => {
        contenedorCuaderno.style.display = 'none';
    }, 1600);
}

