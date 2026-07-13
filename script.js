document.addEventListener("DOMContentLoaded", () => {
    // Configuración del mensaje
    const textoCarta = "Feliz cumpleaños niña linda, felices 17 años. Gracias por todo lo que compartimos, eres una niña súper especial.";
    
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

