<?php

//$arreglo = $_POST['array_datos'];
//print_r('El arreglo es: ' . $arreglo);

$json = file_get_contents('php://input');
$datos = json_decode($json, false);
print_r($datos);
echo ($datos);
