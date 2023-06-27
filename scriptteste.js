let div = document.getElementById("prod");

const valorPacoca = 1.00
const valorBeijinho = 3.00
const valorCajuzinho = 3.00 
const valorDoisAmores = 3.00

function calcValor(tipoDoce) {
    console.log(tipoBolo);

    var precoPacoca = document.querySelector("#precoPacoca");
    var precoCaju = document.querySelector("#precoCaju");

    if (tipoBolo == 'pacoca') {
        var inputcontagem = document.querySelector("#ContPacoca");
        var preco = parseInt(inputcontagem.value) * valorKgBoloChoc;
        precoChoc.value = ("R$ " + preco.toFixed(2)).replace(".", ".");
    }

    else
        if (tipoBolo == 'cajuzinho') {
            var inputcontagem = document.querySelector("#ContCajuzinho");
            var preco = parseInt(inputcontagem.value) * valorKgBoloMora;
            precoMoran.value = ("R$ " + preco.toFixed(2)).replace(".", ",");
        }

    var valorTotalinput = document.querySelector("#precototal");
    var valorTotal = converterStringParaFloat(precoChoc.value) + converterStringParaFloat(precoMoran.value);
    valorTotalinput.value = ("R$ " + valorTotal.toFixed(2)).replace(".", ",")
}

function converterStringParaFloat(valor) {
    // Remove o símbolo "R$" e quaisquer espaços em branco
    valor = valor.replace("R$", "").trim();

    // Substitui a vírgula por um ponto, se necessário
    valor = valor.replace(",", ".");

    // Converte a string para um número de ponto flutuante
    const resultado = parseFloat(valor);

    return resultado;
}

function almentarKg(tipoBolo) {
    console.log(tipoBolo);
    if (tipoBolo == "chocolate") {
        var inputcontagem = document.querySelector("#ContChoco");
        var ContagemChoco = inputcontagem.value
        var novovalor = parseInt(ContagemChoco) + 1;
        inputcontagem.value = novovalor;
    }
    else

        if (tipoBolo == "morango") {
            var inputcontagem1 = document.querySelector("#Contmorang");
            var ContagemMorango = inputcontagem1.value
            var novovalor1 = parseInt(ContagemMorango) + 1;
            inputcontagem1.value = novovalor1;
        }
    calcValor(tipoBolo)
}

function abaixarKg(tipoBolo) {
    console.log(tipoBolo);
    if (tipoBolo == "chocolate") {
        var inputcontagem = document.querySelector("#ContChoco");
        var ContagemChoco = inputcontagem.value
        if (ContagemChoco > 0) {
            var novovalor = parseInt(ContagemChoco) - 1;
            inputcontagem.value = novovalor;
        }
    }
    else

        if (tipoBolo == "morango") {
            var inputcontagem1 = document.querySelector("#Contmorang");
            var ContagemMorango = inputcontagem1.value
            if (ContagemMorango > 0) {
                var novovalor1 = parseInt(ContagemMorango) - 1;
                inputcontagem1.value = novovalor1;
            }
        }
    calcValor(tipoBolo)
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Compra concluída")
    location = "index.html"

});

