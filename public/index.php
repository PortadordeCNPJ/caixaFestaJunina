<?php

session_start();

use app\classes\Cart;
use app\database\models\Read;

//Chamando o vendor do composer
require '../vendor/autoload.php';

//definindo que a variavel $products recebe todos os produtos do arquivo helpers
// $products = require "../app/helpers/products.php";

$cart = new Cart;

$read = new Read;
$products = $read->all('products');

//cart dump é uma função para dar um var_dump dentro da funçao cart
// $cart->dump();

$productsInCart = $cart->cart();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Cart</title>
</head>

<body>
    <div id="container">
        <H3>Cart: <?php echo count($productsInCart) ?> | <a href="cart.php">Go To Cart</a></H3>
        <ul>
            <!-- Esse código intera na variavel de produtos, mostrando os valores que ela recebe, também transformando $product como
                 a variável que vai receber o valor da variavel $products -->
            <?php foreach ($products as $index => $product) : ?>
                <li><?php echo $product->name; ?> | R$<?php echo number_format($product->price, 2, ',', '.'); ?>
                    <a href="add.php?id=<?php echo $product->id ?>"> | add to cart</a>
                </li>
            <?php endforeach ?>
        </ul>
    </div>
 
</body>

</html>