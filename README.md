# 🖥️ Dashboard de Recursos Web

Página estática desarrollada con **HTML5, CSS3, Bootstrap y JavaScript** que recopila y organiza por categorías las herramientas y recursos utilizados durante el curso de desarrollo web (IFCD110 - Confecció i publicació de pàgines web).

🔗 **Demo en vivo:** [castroflix-dot.github.io/mis_recursos_web](https://castroflix-dot.github.io/mis_recursos_web/)

## ✨ Funcionalidades

- **Buscador en tiempo real**: filtra los recursos por palabra clave sin recargar la página, ocultando también las categorías que se quedan sin resultados.
- **Reporte de enlaces caídos**: cada tarjeta incluye un botón que permite avisar por email de un enlace roto (generado dinámicamente con JavaScript).
- **Fondo animado tipo "Matrix"**: efecto de lluvia de caracteres renderizado con `<canvas>` y JavaScript puro.
- **Diseño responsive**: adaptado a móvil, tablet y escritorio mediante el grid system de Bootstrap.
- **+90 recursos organizados** en categorías: tutoriales, diseño CSS, iconografía, tipografía, editores multimedia, IA generativa y herramientas de desarrollo asistido por IA.

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica del contenido |
| CSS3 | Estilos personalizados, tema oscuro con acentos verde "Matrix" |
| Bootstrap 4 | Sistema de rejilla (grid) y componentes base (cards, botones) |
| JavaScript (vanilla) | Buscador dinámico, animación de canvas, generación de formularios de reporte |
| PHP | Procesamiento del formulario de reporte de enlaces (`reporte.php`, funcional en hosting con soporte PHP) |

## 📁 Estructura del proyecto

```
mis_recursos_web/
├── index.html      # Estructura principal y contenido
├── styles.css       # Estilos y tema visual
├── script.js         # Lógica del buscador, reportes y animación matrix
├── reporte.php      # Backend de envío de reportes por email (requiere hosting PHP)
└── README.md
```

> ⚠️ **Nota técnica:** `reporte.php` requiere un servidor con soporte PHP y SMTP configurado para funcionar (por ejemplo un hosting tradicional). En GitHub Pages, al ser hosting estático, el formulario de reporte se muestra pero no envía el correo, ya que este servicio no ejecuta código de servidor.

## 🚀 Cómo usarlo localmente

1. Clona el repositorio:
   ```
   git clone https://github.com/castroflix-dot/mis_recursos_web.git
   ```
2. Abre `index.html` en tu navegador.

No requiere instalación de dependencias ni build: es HTML, CSS y JS puro (más las CDN de Bootstrap y Google Fonts).

## 👤 Autor

**Sergi Castro Navas**
Técnico en desarrollo web · Frontend / Backend
📧 castroflix@gmail.com
🔗 [GitHub](https://github.com/castroflix-dot)
