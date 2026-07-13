document.addEventListener("DOMContentLoaded", () => {
    const textoCarta = "Feliz cumpleaños niña linda, felices 17 años. Gracias por todo lo que compartimos, eres una niña súper especial.";
    
    const btnComenzar = document.getElementById('btn-comenzar');
    const contenedorTexto = document.getElementById('texto-lapiz');
    const contenedorCuaderno = document.getElementById('cuaderno');
    const seccionPastel = document.getElementById('seccion-pastel');

    let indiceChar = 0;

    btnComenzar.addEventListener('click', () => {
        btnComenzar.style.display = 'none';
        empezarEfectoLapiz();
    });

    function empezarEfectoLapiz() {
        if (indiceChar < textoCarta.length) {
            contenedorTexto.textContent += textoCarta.charAt(indiceChar);
            indiceChar++;
            
            // Forzar scroll al final de la hoja para ver el texto aparecer
            const hoja = document.querySelector('.hoja-cuaderno');
            hoja.scrollTop = hoja.scrollHeight;
            
            setTimeout(empezarEfectoLapiz, 40);
        } else {
            setTimeout(activarTransicionPastel, 1500);
        }
    }

    function activarTransicionPastel() {
        contenedorCuaderno.classList.add('desplazar-arriba');
        seccionPastel.classList.remove('oculto');
        
        setTimeout(() => {
            seccionPastel.classList.add('mostrar');
        }, 100);
    }
});
