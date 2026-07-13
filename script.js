document.addEventListener("DOMContentLoaded", () => {
    const textoCarta = "Feliz cumpleaños niña linda, felices 17 años. Gracias por todo lo que compartimos, eres una niña súper especial.";

    const btnComenzar = document.getElementById('btn-comenzar');
    const contenedorTexto = document.getElementById('texto-lapiz');
    const contenedorCuaderno = document.getElementById('cuaderno');
    const seccionPastel = document.getElementById('seccion-pastel');

    let indiceChar = 0;
    const VELOCIDAD_ESCRITURA = 40; // Un poco más lento para que se note

    if (btnComenzar && contenedorTexto) {
        btnComenzar.addEventListener('click', () => {
            btnComenzar.style.display = 'none'; // Oculta el botón
            empezarEfectoLapiz();
        });
    }

    function empezarEfectoLapiz() {
        if (indiceChar < textoCarta.length) {
            // Añadimos el carácter al texto
            contenedorTexto.textContent += textoCarta.charAt(indiceChar);
            indiceChar++;
            
            // Forzamos el scroll hacia abajo
            contenedorTexto.parentElement.scrollTop = contenedorTexto.parentElement.scrollHeight;
            
            setTimeout(empezarEfectoLapiz, VELOCIDAD_ESCRITURA);
        } else {
            // Terminó de escribir, esperamos 2 segundos y cambiamos
            setTimeout(activarTransicionPastel, 2000);
        }
    }

    function activarTransicionPastel() {
        // Desplazamos cuaderno
        contenedorCuaderno.classList.add('desplazar-arriba');
        
        // Mostramos el pastel
        seccionPastel.classList.remove('oculto');
        seccionPastel.classList.add('mostrar');
        
        // Quitamos el cuaderno del DOM después de la animación
        setTimeout(() => {
            contenedorCuaderno.style.display = 'none';
        }, 1600);
    }
});


