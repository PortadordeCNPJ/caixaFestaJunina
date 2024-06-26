<?php 

namespace app\database;

use PDO;
use PDOException;

class Connect 
{
    private static $pdo = null;

    public static function connect(){
        try {
            //Se não existir a coneção
            if(!static::$pdo){
                //Vai ser criada e atribuida a esse PDO e depois vai retonar o PDO
                static::$pdo = new PDO("mysql:host=localhost;dbname=cart", "root", "",[
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
                ]);

                //Caso exista a coneção ele não vai para o if e vai retornar a conexão direto
                return static::$pdo;
            }
        } catch (PDOException $e) {
            var_dump($e->getMessage());
        }
    }
}

?>