<?php
//# ==================== Credenciales ====================
$servername = 'localhost';
$database = 'prueba_api';
$username = 'root';
$password = '123456';

//# ==================== Conexion a la base de datos ====================
$conexion = mysqli_connect($servername, $username, $password, $database);

if (!$conexion) {
    die('No hay conection' . mysqli_connect_errno());
} else {
    echo ('Conexion Exitosa :)');
}
//# Metodo que sirve

$json = file_get_contents('php://input');
$datos = json_decode($json, true);
print_r($datos);

//!foreach que ingserta los valores

foreach ($datos as $row) {
    $id = $row['id']; //
    $nombre = $row['nombre']; //fjfjf
    $email = $row['email']; //dfskfkfk

    $sql = "INSERT INTO usuarios(id,nombre,email)VALUES('$id', '$nombre', '$email')";
    $conexion->query($sql);
    if ($conexion->query($sql) === TRUE) {
        echo "Bien cuate";
    } else {
        echo "malo cuate ";
    }
}
