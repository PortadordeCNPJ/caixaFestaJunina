<?php

$hostname = "localhost";
$bancodedados = "bd_barraca";
$usuario = "root";
$senha = "123";

$mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);
if ($mysqli->connect_errno) {
    echo "Falha ao conectar: (" . $mysqli->connect_errno . ")" . $mysqli->connect_error;
}
?>