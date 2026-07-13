document.addEventListener("DOMContentLoaded", () => {
    // Configuración del mensaje
    const textoCarta = "Feliz cumpleaños chaparrita, disfruta este festejo con la gente que te ama, recuerda que siempre estaré para ti a pesar de todo, sabes que te quiero mucho, siempre tendrás una parte en mi corazón, que Dios te bendiga en esta nueva etapa y que seas de alegría para la gente que te rodea, disfruta tu tiempo en el colegio, espero seguir compartiendo contigo.                                                               XOXO";
    
    // Selección de elementos
    const btnComenzar = document.getElementById('btn-comenzar');
    const contenedorTexto = document.getElementById('texto-lapiz');
    const contenedorCuaderno = document.getElementById('cuaderno');
    const seccionPastel = document.getElementById('seccion-pastel');
    const hojaCuaderno = document.querySelector('.hoja-cuaderno');

    let indiceChar = 0;
    const VELOCIDAD_ESCRITURA = 40;

    // Evento de inicio
    if (btnComenzar) {
        btnComenzar.addEventListener('click', () => {
            btnComenzar.style.display = 'none'; // Ocultar botón al iniciar
            empezarEfectoLapiz();
        });
    }

    function empezarEfectoLapiz() {
        if (indiceChar < textoCarta.length) {
            // Escribir carácter por carácter
            contenedorTexto.textContent += textoCarta.charAt(indiceChar);
            indiceChar++;
            
            // Mantener el scroll al final de la hoja mientras escribe
            hojaCuaderno.scrollTop = hojaCuaderno.scrollHeight;
            
            setTimeout(empezarEfectoLapiz, VELOCIDAD_ESCRITURA);
        } else {
            // Esperar un momento antes de la transición final
            setTimeout(activarTransicionPastel, 1500);
        }
    }

    function activarTransicionPastel() {
        // Desplazar cuaderno hacia arriba
        contenedorCuaderno.classList.add('desplazar-arriba');
        
        // Mostrar pastel
        setTimeout(() => {
            seccionPastel.classList.remove('oculto');
            seccionPastel.classList.add('mostrar');
            contenedorCuaderno.style.display = 'none';
        }, 1600); // Coincide con la duración de la transición CSS
    }
});


