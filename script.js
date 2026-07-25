document.addEventListener("DOMContentLoaded", function () {
    // 1. Lógica para los botones de reporte
    const tarjetas = document.querySelectorAll('.card-reportable');

    tarjetas.forEach(card => {
        // Obtenemos el título (buscando h5, h6 o .card-title) y el enlace
        const tituloEl = card.querySelector('.card-title') || card.querySelector('h5') || card.querySelector('h6');
        const titulo = tituloEl ? tituloEl.innerText : "Enlace";
        const enlace = card.querySelector('a') ? card.querySelector('a').href : "#";

        // Creamos el formulario
        const form = document.createElement('form');
        form.action = 'reporte.php';
        form.method = 'POST';
        form.target = "_blank";
        
        form.innerHTML = `
            <input type="hidden" name="nombre_enlace" value="${titulo}">
            <input type="hidden" name="url_enlace" value="${enlace}">
            <button type="submit" class="btn-reporte" title="Reportar enlace caído">📩</button>
        `;

        // Añadimos el formulario a la tarjeta
        card.appendChild(form);
    });

    // 1.5 Lógica del buscador
    const inputBusqueda = document.getElementById('buscadorEnlaces');
    const contador = document.getElementById('resultadosContador');

    if (inputBusqueda) {
        // Cada categoría = su h2.category-title + el .row que le sigue
        const categorias = Array.from(document.querySelectorAll('.category-title')).map(titulo => ({
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

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%'\"#&_(),.;:?!\\|{}<>[]^~";
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

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