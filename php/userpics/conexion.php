<?php
/* La conexion con MySQLi */
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "php_personal";
$conn = mysqli_connect($servername, $username, $password, $dbname) or die("Conexion fallida: " . mysqli_connect_error());
// Imprime si existe algun error
if (mysqli_connect_errno()) {
    printf("La conexion ha fallado: %s\n", mysqli_connect_error());
    exit();
}
?>