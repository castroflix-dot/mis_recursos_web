document.addEventListener("DOMContentLoaded", function () {

    // 1. Lógica para los botones de reporte (con EmailJS)
    const tarjetas = document.querySelectorAll('.card-reportable');

    tarjetas.forEach(card => {
        const tituloEl = card.querySelector('.card-title') || card.querySelector('h5') || card.querySelector('h6');
        const titulo = tituloEl ? tituloEl.innerText : "Enlace";
        const enlace = card.querySelector('a') ? card.querySelector('a').href : "#";

        const boton = document.createElement('button');
        boton.type = 'button';
        boton.className = 'btn-reporte';
        boton.title = 'Reportar enlace caído';
        boton.textContent = '📩';

        boton.addEventListener('click', () => {
            boton.disabled = true;
            boton.textContent = '⏳';

            emailjs.send('service_5d90udt', 'template_of2vo5c', {
                nombre_enlace: titulo,
                url_enlace: enlace,
                fecha: new Date().toLocaleString('es-ES')
            }).then(() => {
                boton.textContent = '✅';
            }, (error) => {
                console.error('Error al enviar el reporte:', error);
                boton.textContent = '❌';
                boton.disabled = false;
            });
        });

        card.appendChild(boton);
    });
    
    // 1.5 Lógica del buscador
    const inputBusqueda = document.getElementById('buscadorEnlaces');
    const contador = document.getElementById('resultadosContador');

    if (inputBusqueda) {
        // Cada categoría = su h2.category-title (con clase cat-*) + el .row que le sigue
        // Se excluye el título "Comentarios" (no lleva clase cat-*, no tiene tarjetas asociadas)
        const categorias = Array.from(document.querySelectorAll('.category-title[class*="cat-"]')).map(titulo => ({
            titulo: titulo,
            fila: titulo.nextElementSibling
        }));

        inputBusqueda.addEventListener('input', () => {
            const texto = inputBusqueda.value.trim().toLowerCase();
            let totalVisibles = 0;

            categorias.forEach(({ titulo, fila }) => {
                if (!fila) return;
                const tarjetas = fila.querySelectorAll('.card-reportable');
                let visiblesEnCategoria = 0;

                tarjetas.forEach(tarjeta => {
                    const contenido = tarjeta.textContent.toLowerCase();
                    const coincide = contenido.includes(texto);
                    tarjeta.classList.toggle('oculto', !coincide);
                    if (coincide) visiblesEnCategoria++;
                });

                const categoriaVacia = texto !== '' && visiblesEnCategoria === 0;
                titulo.classList.toggle('oculto', categoriaVacia);
                fila.classList.toggle('oculto', categoriaVacia);

                totalVisibles += visiblesEnCategoria;
            });

            contador.textContent = texto
                ? `${totalVisibles} resultado(s) encontrado(s)`
                : '';
        });
    }

    // 2. Lógica para el canvas Matrix
    const canvas = document.getElementById('matrixCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%'\"#&_(),.;:?!\\|{}<>[]^~";
        const fontSize = 16;
        let columns = 0;
        let drops = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const nuevasColumnas = Math.floor(canvas.width / fontSize);

            // Conserva el progreso de las columnas ya existentes y añade
            // las nuevas (o recorta las sobrantes) sin reiniciar toda la animación
            const nuevasDrops = [];
            for (let x = 0; x < nuevasColumnas; x++) {
                nuevasDrops[x] = drops[x] !== undefined ? drops[x] : 1;
            }
            drops = nuevasDrops;
            columns = nuevasColumnas;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#0F0";
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        setInterval(draw, 33);
    }
});