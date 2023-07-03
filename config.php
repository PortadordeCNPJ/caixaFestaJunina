<?php
    define('HOST', 'localhost');
    define('USER', 'root');
    define('PASS', '');
    define('BASE', 'cadastro');

    $conn = new MYSQLI(HOST,USER,PASS,BASE);

    if($conexao->connect_errno){
        echo 'Erro';
    }
    else{
        echo 'Its work';
    }

?>