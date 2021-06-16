<?php
//# Archivo donde mandamos a llamar la conección de la DB
include 'conection.php';

//#! Metodo que sirve
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
