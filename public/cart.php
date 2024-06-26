<?php

session_start();

use app\classes\CartProducts;
use app\classes\Cart;

//Chamando o vendor do composer
require '../vendor/autoload.php';

//Objeto concreto que implementa o cartInterface
$cartProducts = new CartProducts();

$products = $cartProducts->products(new Cart);

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
    <h2>Cart | <a href="index.php">Home</a></h2>

    <hr>
    <div id="container">
        <?php if(count($products['products']) <= 0): ?>
            <h3>Nenhum produto dentro do carrinho de compras</h3>
        <?php else: ?>
            <ul>
                <?php foreach($products['products'] as $product):?>
                    <li class="cart-produtc">
                        <?php echo $product['product'];?>
                        <form action="quantidade.php" method="get">
                            <input type="hidden" name="id" value="<?php echo $product['id'];?>">
                            <img src="<?php echo $product['image'];?>" alt="">
                            <input type="text" name="qty" value="<?php echo $product['qty'];?>" id="cart-input-qty">
                        </form><?php echo $product['description'];?> x R$ <?php echo number_format($product['price'],2,',','.')?> | R$ <?php echo number_format($product['subtotal'],2,',','.')?>
                        <a href="remove.php?id=<?php echo $product['id'] ?>" id="cart-remove">Remove</a>
                    </li> 
                <?php endforeach ?>
            </ul>
            <div id="cart-total-clear">
                <span id="cart-total">
                    Total: R$ <?php echo number_format($products['total'],2,',','.')?>
                </span>


                <span id="cart-clear">
                    <a href="clear.php">Clear Cart</a>
                </span>
            </div>
            <?php endif ?>
    </div>

</body>

</html>