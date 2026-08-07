# 🖥️ Dashboard de Recursos Web

Página estática desarrollada con **HTML5, CSS3, Bootstrap y JavaScript** que recopila y organiza por categorías las herramientas y recursos utilizados durante el curso de desarrollo web (IFCD110 - Confecció i publicació de pàgines web).

🔗 **Demo en vivo:** [castroflix.github.io/mis_recursos_web](https://castroflix.github.io/mis_recursos_web/)

## ✨ Funcionalidades

- **Buscador en tiempo real**: filtra los recursos por palabra clave sin recargar la página, ocultando también las categorías que se quedan sin resultados.
- **Reporte de enlaces caídos**: cada tarjeta incluye un botón que envía un email automático al administrador avisando del enlace roto, usando [EmailJS](https://www.emailjs.com/) (envío directo desde el navegador, sin backend).
- **Sistema de comentarios**: integración con [giscus](https://giscus.app/), que usa las Discussions de GitHub como base de datos de comentarios (sin servidor ni base de datos propia).
- **Fondo animado tipo "Matrix"**: efecto de lluvia de caracteres renderizado con `<canvas>` y JavaScript puro.
- **Diseño responsive**: adaptado a móvil, tablet y escritorio mediante el grid system de Bootstrap.
- **+90 recursos organizados** en categorías: tutoriales, diseño CSS, iconografía, tipografía, editores multimedia, IA generativa y herramientas de desarrollo asistido por IA.

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica del contenido |
| CSS3 | Estilos personalizados, tema oscuro con acentos verde "Matrix" |
| Bootstrap 4 | Sistema de rejilla (grid) y componentes base (cards, botones) |
| JavaScript (vanilla) | Buscador dinámico, animación de canvas, lógica de reporte de enlaces |
| EmailJS | Envío de emails de reporte directamente desde el navegador (sin backend) |
| giscus | Sistema de comentarios basado en GitHub Discussions |
| PHP | Alternativa de envío de reportes vía `reporte.php`, usada en el despliegue en hosting propio con soporte PHP |

## 📁 Estructura del proyecto

```
## 📁 Estructura del Proyecto

El proyecto sigue una organización limpia de archivos agrupando todos los assets dentro de su correspondiente subdirectorio:

```
mis_recursos_web/
├── index.html          # Estructura HTML5 principal y directorio de tarjetas
├── README.md           # Documentación completa del proyecto
├── robots.txt          # Directivas de rastreo para motores de búsqueda
├── sitemap.xml         # Mapa del sitio optimizado para indexación SEO
└── assets/             # Subdirectorio de recursos estáticos y backend
    ├── css/
    │   └── styles.css  # Estilos generales, tema oscuro y paletas por categoría
    ├── js/
    │   └── script.js   # Lógica del buscador, EmailJS y animación Matrix Canvas
    ├── img/
    │   ├── favicon.svg # Icono vectorial para navegadores modernos
    │   ├── favicon.png # Favicon estándar PNG (32x32)
    │   └── apple-touch-icon.png # Icono para dispositivos iOS/Apple (180x180)
    └── reporte.php     # Endpoint backend alternativo de reportes (Hosting PHP/SMTP)
```

> 💡 **Dos formas de despliegue, dos formas de reporte:** en [GitHub Pages](https://castroflix.github.io/mis_recursos_web/) (hosting estático) el botón de reporte usa **EmailJS**, ya que no hay servidor que ejecute PHP. En el despliegue de prácticas del curso (hosting con PHP y SMTP configurado) se usa `reporte.php`. El código de `script.js` está preparado para la versión de GitHub Pages.

## 🚀 Cómo usarlo localmente

1. Clona el repositorio:
   ```
   git clone https://github.com/castroflix/mis_recursos_web.git
   ```
2. Abre `index.html` en tu navegador.

No requiere instalación de dependencias ni build: es HTML, CSS y JS puro (más las CDN de Bootstrap y Google Fonts).

## 👤 Autor

**Sergi Castro Navas**
Técnico en desarrollo web · Frontend / Backend
📧 castroflix@gmail.com
🔗 [GitHub](https://github.com/castroflix)
