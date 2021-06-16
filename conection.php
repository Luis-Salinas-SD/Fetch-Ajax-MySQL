<?php
//# ==================== Credenciales ====================
$servername = 'localhost';
$database = 'prueba_api';
$username = 'root';
$password = '123456';

//# ==================== Credenciales ====================
$conexion = mysqli_connect($servername, $username, $password, $database);

if (!$conexion) {
    die('No hay conection' . mysqli_connect_errno());
} else {
    echo ('Conexion Exitosa :)');
}
