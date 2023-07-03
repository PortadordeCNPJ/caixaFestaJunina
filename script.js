let form = document.getElementById("prod");

const valorBrigadeiro = 2.00
const valorBeijinho = 2.00
const valorCajuzinho = 2.00
const valorDoisAmores = 2.00
const combo_1 = 5.00
const combo_2 = 7.00

function calcValor(tipoDoce) {
    console.log(tipoDoce);

    var precoBrigadeiro = document.querySelector("#precoBrigadeiro");
    var precoCaju = document.querySelector("#precoCaju");
    var precoBeij = document.querySelector("#precoBeij");
    var precoAmore = document.querySelector("#precoAmore");
    var precoCombo_1 = document.querySelector("#precoCombo_1");
    var precoCombo_2 = document.querySelector("#precoCombo_2");


    switch (tipoDoce) {
        case "brigadeiro":
            var inputcontagem = document.querySelector("#ContBriga");
            var preco = parseInt(inputcontagem.value) * valorBrigadeiro;
            precoBrigadeiro.value = ("R$ " + preco.toFixed(2)).replace(".", ",");
            break;

        case "cajuzinho":
            var inputcontagem = document.querySelector("#ContCajuzinho");
            var preco = parseInt(inputcontagem.value) * valorCajuzinho;
            precoCaju.value = ("R$ " + preco.toFixed(2)).replace(".", ",");
            break;

        case "beijinho":
            var inputcontagem = document.querySelector("#ContBeijinho");
            var preco = parseInt(inputcontagem.value) * valorBeijinho;
            precoBeij.value = ("R$ " + preco.toFixed(2)).replace(".", ",");
            break;

        case "twoAmores":
            var inputcontagem = document.querySelector("#ContAmores");
            var preco = parseInt(inputcontagem.value) * valorDoisAmores;
            precoAmore.value = ("R$ " + preco.toFixed(2)).replace(".", ",");
            break;

        case "combo_1":
            var inputcontagem = document.querySelector("#ContCombo_1");
            var preco = parseInt(inputcontagem.value) * combo_1;
            precoCombo_1.value = ("R$ " + preco.toFixed(2)).replace(".", ",");
            break;

        case "combo_2":
            var inputcontagem = document.querySelector("#ContCombo_2");
            var preco = parseInt(inputcontagem.value) * combo_2;
            precoCombo_2.value = ("R$ " + preco.toFixed(2)).replace(".", ",");
            break;

        default:
            break;
    }

    var valorTotalinput = document.querySelector("#precototal");
    var valorTotal = converterStringParaFloat(precoBrigadeiro.value) + converterStringParaFloat(precoCaju.value) + converterStringParaFloat(precoBeij.value) + converterStringParaFloat(precoAmore.value) + converterStringParaFloat(precoCombo_1.value) + converterStringParaFloat(precoCombo_2.value);
    valorTotalinput.value = ("R$ " + valorTotal.toFixed(2)).replace(".", ",");
}



/* Colocar uma função como a de valor logo abaixo, para nao preicsar sempre utilizar o toFixed */

function converterStringParaFloat(valor) {
    // Remove o símbolo "R$" e quaisquer espaços em branco
    valor = valor.replace("R$", "").trim();

    // Substitui a vírgula por um ponto, se necessário
    valor = valor.replace(",", ".");

    // Converte a string para um número de ponto flutuante
    const resultado = parseFloat(valor);

    return resultado;
}

function almentarKg(tipoDoce) {
    console.log(tipoDoce);
    switch (tipoDoce) {
        case "brigadeiro":
            var inputcontagem = document.querySelector("#ContBriga");
            var ContagemBrigadei = inputcontagem.value
            var novovalor = parseInt(ContagemBrigadei) + 1;
            inputcontagem.value = novovalor;
            break;

        case "cajuzinho":
            var inputcontagem1 = document.querySelector("#ContCajuzinho");
            var ContagemCaju = inputcontagem1.value
            var novovalor1 = parseInt(ContagemCaju) + 1;
            inputcontagem1.value = novovalor1;
            break;

        case "beijinho":
            var inputcontagem2 = document.querySelector("#ContBeijinho");
            var ContagemBeiji = inputcontagem2.value
            var novovalor2 = parseInt(ContagemBeiji) + 1;
            inputcontagem2.value = novovalor2;
            break;

        case "twoAmores":
            var inputcontagem3 = document.querySelector("#ContAmores");
            var ContagemAmores = inputcontagem3.value
            var novovalor3 = parseInt(ContagemAmores) + 1;
            inputcontagem3.value = novovalor3;
            break;

        case "combo_1":
            var inputcontagem4 = document.querySelector("#ContCombo_1");
            var ContagemComb1 = inputcontagem4.value
            var novovalor4 = parseInt(ContagemComb1) + 1;
            inputcontagem4.value = novovalor4;
            break;

        case "combo_2":
            var inputcontagem5 = document.querySelector("#ContCombo_2");
            var ContagemComb2 = inputcontagem5.value
            var novovalor5 = parseInt(ContagemComb2) + 1;
            inputcontagem5.value = novovalor5;
            break;

        default:
            break;

    }

    calcValor(tipoDoce)
}

function abaixarKg(tipoDoce) {
    console.log(tipoDoce);

    switch (tipoDoce) {

        case "brigadeiro":
            var inputcontagem = document.querySelector("#ContBriga");
            var ContagemBrigadei = inputcontagem.value
            if (ContagemBrigadei > 0) {
                var novovalor = parseInt(ContagemBrigadei) - 1;
                inputcontagem.value = novovalor;
            }
            break;

        case "cajuzinho":
            var inputcontagem1 = document.querySelector("#ContCajuzinho");
            var ContagemCaju = inputcontagem1.value
            if (ContagemCaju > 0) {
                var novovalor1 = parseInt(ContagemCaju) - 1;
                inputcontagem1.value = novovalor1;
            }
            break;

        case "beijinho":
            var inputcontagem2 = document.querySelector("#ContBeijinho");
            var ContagemBeiji = inputcontagem2.value
            if (ContagemBeiji > 0) {
                var novovalor2 = parseInt(ContagemBeiji) - 1;
            inputcontagem2.value = novovalor2;
            }
            break;

        case "twoAmores":
            var inputcontagem3 = document.querySelector("#ContAmores");
            var ContagemDoisAmo = inputcontagem3.value
            if (ContagemDoisAmo > 0){
                var novovalor3 = parseInt(ContagemDoisAmo) - 1;
            inputcontagem3.value = novovalor3;
            }
            break;

        case "combo_1":
            var inputcontagem4 = document.querySelector("#ContCombo_1");
            var ContagemComb1 = inputcontagem4.value
            if (ContagemComb1 > 0) {
                var novovalor4 = parseInt(ContagemComb1) - 1;
            inputcontagem4.value = novovalor4;
            }
            break;

        case "combo_2":
            var inputcontagem5 = document.querySelector("#ContCombo_2");
            var ContagemComb2 = inputcontagem5.value
            if (ContagemComb2 > 0) {
                var novovalor5 = parseInt(ContagemComb2) - 1;
            inputcontagem5.value = novovalor5;
            }
            break;

        default:
            break;
    }

    calcValor(tipoDoce)
   
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Compra concluída")
    location = "index.html"

});