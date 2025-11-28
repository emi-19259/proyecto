<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $fecha = $_POST['fecha'];
    $genero = $_POST['genero'];
    $pais = $_POST['pais'];

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP de Gmail
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;

        // TU CUENTA DE GMAIL
        $mail->Username = 'emiaguinagalara@gmail.com';
        $mail->Password = 'cqzo wbvs yhgf rqjj';

        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Remitente y destinatario
        $mail->setFrom('tucorreo@gmail.com', 'Formulario Web');
        $mail->addAddress('tucorreo@gmail.com', 'Mi nombre');

        // Contenido del correo
        $mail->isHTML(true);
          $asunto = "Nuevo registro en TecnoShop MX";
        $mail->Body    = "
            <h2>Nuevo registro en TecnoShop MX</h2>
            <p><strong>Nombre:</strong> $nombre</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Fecha de nacimiento:</strong> $fecha</p>
            <p><strong>Género:</strong> $genero</p>
            <p><strong>País:</strong><br>$pais</p>
        ";

        $mail->send();
        echo "El mensaje ha sido enviado correctamente.";
    } catch (Exception $e) {
        echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
    }
}
?>