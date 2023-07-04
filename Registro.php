<html>

<head>
  <title>Barraca Julina</title>

  <head>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQvX3ipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


  </head>

<body>
  <?php

  include_once('config.php');

  if (isset($_POST['registro'])) {
    print_r($_POST['produto']);
    print_r($_POST['preco']);
    print_r($_POST['quantidade']);
    var_dump($_POST);


    $produtos = $_POST['produto'];
    $preco = $_POST['preco'];
    $quantidade = $_POST['quantidade'];

    $sql = "INSERT INTO tb_produtos(nome_produtos, preco_produtos)
        VALUES ('$produtos', '$preco')";

    if (mysqli_query($mysqli, $sql)) {
      echo "Produto registrado com sucesso.";
    } else {
      echo "ERRO" . mysqli_connect_error($mysqli);
    }

    mysqli_close($mysqli);

  } ?>

  <div class="box">
    <form id="form" class="colorful-form" method="post" action="?page=novo">

      <div class="form-group">
        <label class="form-label">Produto:</label>
        <input required="" placeholder="Insira o produto" class="form-input" id="produto" name="produto" type="text">
      </div>

      <div class="form-group">
        <label class="form-label">Preço:</label>
        <input required="" placeholder="Insira o preço" class="form-input" name="preco" id="preco">
      </div>

      <div class="form-group">
        <label class="form-label">Quantidade:</label>
        <input required="" placeholder="Insira a quantidade" class="form-input" id="quantidade" name="quantidade"
          type="text">
        <input type="submit" name="registro" id="registo">
      </div>

    </form>
  </div>
</body>

</html>