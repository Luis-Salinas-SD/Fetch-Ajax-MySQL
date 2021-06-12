<?php

$arreglo = json_decode($_POST['array_chido']);
print_r('El arreglo es: ' . $arreglo);


foreach ($arreglo as $value) {
    unset($value);
}
