<h1 class="titulobarraca">Sejam bem-vindos a barraca do 3° C Informática</h1>
<BR><BR>
<img src="./imgs/festaaaaaaaaaa.jpeg" class="image-top">

<form id="prod" method="POST" action="Registro.php">
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
            <img class="img-card" src="./imgs/kitamor.jpeg">
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

    <center><a href="Venda.php"><input type="button" class="butao-pix" href="?page="></a></center>

    <center><input class="total-amount" id="precototal" readonly value="R$ 0,00" /></center>

    <center><a href="?page=novo"><input type="button" class="registro" href="#" value="Registro" name="registro"></a>
    </center>

</div>

<!-- Insteração do usuario com os produtos -->
<script src="script.js"></script>


<imput type="button"></imput>