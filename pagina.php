<?php
//# Archivo donde mandamos a llamar la conección de la DB
include 'conection.php';

//#! Metodo que sirve
$json = file_get_contents('php://input');
$datos = json_decode($json, true);
print_r($datos);

//!foreach que inserta los valores del JSON a la tabla usuarios
foreach ($datos as $row) {
    $id = $row['id'];
    $nombre = $row['nombre'];
    $email = $row['email'];

    $sql = "INSERT INTO usuarios(id,nombre,email)VALUES('$id', '$nombre', '$email')";
    $conexion->query($sql);

    /*  if ($conexion->query($sql) === TRUE) {
        echo "Bien cuate";
    } else {
        echo "malo cuate ";
    } */
}
