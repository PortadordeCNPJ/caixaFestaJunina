<?php

$hostname = "localhost";
$bancodedados = "dbfeira";
$usuario = "root";
$senha = "";

$bd_feira = new mysqli($hostname, $usuario,  $bancodedados);
if ($bd_feira->connect_errno) {
    echo "Falha ao conectar: (" . $bd_feira->connect_errno . ")" . $bd_feira->connect_error;
}
?>