<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Se eliminan saltos de línea y retornos de carro para evitar header injection
    // en el envío del correo (asunto/cuerpo construidos con estos valores).
    $nombreEnlace = str_replace(["\r", "\n"], '', $_POST['nombre_enlace'] ?? '');
    $urlEnlace = str_replace(["\r", "\n"], '', $_POST['url_enlace'] ?? '');
    
    $para = "castroflix@gmail.com"; // CAMBIA ESTO POR TU EMAIL
    $asunto = "Reporte de enlace caido: " . $nombreEnlace;
    $mensaje = "El usuario informa que el siguiente enlace no funciona:\n\n";
    $mensaje .= "Nombre: " . $nombreEnlace . "\n";
    $mensaje .= "URL: " . $urlEnlace . "\n";
    $mensaje .= "Fecha: " . date("d-m-Y H:i:s");

    mail($para, $asunto, $mensaje);
    
    echo "Reporte enviado correctamente. <a href='javascript:history.back()'>Volver</a>";
}
?>