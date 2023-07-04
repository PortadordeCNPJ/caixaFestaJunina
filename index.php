<?php
	switch(@$_REQUEST["page"]){
		case "novo":
			include("Registro.php");
		break;
		case "listar":
			include("Venda.php");
		break;
		default;

  if(isset())

	}
	?>
  <!-- Opções de escolhande página(Compra,Venda,Registro) -->

<html class="inicio">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Barraca Junina</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <link rel="stylesheet" type="text/css" href="style.css">

  </head>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Fluxo de caixa</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="" href="index.php">Compra</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="?page=listar">Venda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="?page=novo">Registro</a>
          </li>
      </div>
    </div>
  </nav>

  <div class="container">
	<div class="row">
		<div class="col mt-5">

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

<!--Produtos -->
  <body class="produto">
  <h1 class="titulobarraca">Sejam bem-vindos a barraca do 3° C Informática</h1>
  <BR><BR>
  <img src="./imgs/festaaaaaaaaaa.jpeg" class="image-top">

  <form id="prod">
        <div class="container-card">
            <div class="card">
                <img class="img-card" src="./imgs/cajuzinho.jpg">
                <div class="texto-card">
                    <div class="btn" onclick="almentarKg('cajuzinho')">+</div>
                    <input class="count" id="ContCajuzinho" readonly value="0" />
                    <div class="btn" onclick="abaixarKg('cajuzinho')">-</div>
                </div>
                <div class="prices">
                    <input class="amount" id="precoCaju" readonly value="R$0,00" />
                </div>
            </div>

            <div class="card">
                <img class="img-card" src="./imgs/doisamores.jpeg">
                <div class="texto-card">
                    <div class="btn" onclick="almentarKg('twoAmores')">+</div>
                    <input class="count" id="ContAmores" readonly value="0" />
                    <div class="btn" onclick="abaixarKg('twoAmores')">-</div>
                </div>
                <div class="prices">
                    <input class="amount" id="precoAmore" readonly value="R$0,00" />
                </div>
            </div>

            <div class="card">
                <img class="img-card" src="./imgs/brigadeiro.webp">
                <div class="texto-card">
                    <div class="btn" onclick="almentarKg('brigadeiro')">+</div>
                    <input class="count" id="ContBriga" readonly value="0" />
                    <div class="btn" onclick="abaixarKg('brigadeiro')">-</div>
                </div>
                <div class="prices">
                    <input class="amount" id="precoBrigadeiro" readonly value="R$0,00" />
                </div>
            </div>

            <div class="card">
                <img class="img-card" src="./imgs/beijinho.png">
                <div class="texto-card">
                    <div class="btn" onclick="almentarKg('beijinho')">+</div>
                    <input class="count" id="ContBeijinho" readonly value="0" />
                    <div class="btn" onclick="abaixarKg('beijinho')">-</div>
                </div>
                <div class="prices">
                    <input class="amount" id="precoBeij" readonly value="R$0,00" />
                </div>
            </div>

            <div class="card">
                <img class="img-card" src="./imgs/kit1.avif">
                <div class="texto-card">
                    <div class="btn" onclick="almentarKg('combo_1')">+</div>
                    <input class="count" id="ContCombo_1" readonly value="0" />
                    <div class="btn" onclick="abaixarKg('combo_1')">-</div>
                </div>
                <div class="prices">
                    <input class="amount" id="precoCombo_1" readonly value="R$0,00" />
                </div>
            </div>

            <div class="card">
                <img class="img-card" src="./imgs/kit2.jpeg">
                <div class="texto-card">
                    <div class="btn" onclick="almentarKg('combo_2')">+</div>
                    <input class="count" id="ContCombo_2" readonly value="0" />
                    <div class="btn" onclick="abaixarKg('combo_2')">-</div>
                </div>
                <div class="prices">
                    <input class="amount" id="precoCombo_2" readonly value="R$0,00" />
                </div>
            </div>

            <div class="card">
                <img class="img-card" src="./imgs/kit2.jpeg">
                <div class="texto-card">
                    <div class="btn" onclick="almentarKg('kitAmor')">+</div>
                    <input class="count" id="ContKitAmo" readonly value="0" />
                    <div class="btn" onclick="abaixarKg('kitAmor')">-</div>
                </div>
                <div class="prices">
                    <input class="amount" id="precoKitAmor" readonly value="R$0,00" />
                </div>
            </div>
        </div>
    </form>

    <script src="script.js"></script>

    <div class="botoes">

    <center><a href="Venda.php"><input type="button" class="butao-pix" href="Venda.php"></a></center>

    <center><input class="total-amount" id="precototal" readonly value="R$ 0,00" /></center>

    <center><a href="Registro.php"><input type="button" class="registro" href="#" value="Registro" name="registro"></a></center>

    </div>
<!-- Insteração do usuario com os produtos -->
<script src="script.js"></script>


<imput type="button"></imput>
  </body>

</html>
