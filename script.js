let form = document.getElementById("prod");

const valorPacoca = 1.00
const valorBeijinho = 3.00
const valorCajuzinho = 3.00
const valorDoisAmores = 3.00

function calcValor(tipoDoce) {
    console.log(tipoDoce);

    var precoPacoca = document.querySelector("#precoPacoca");
    var precoCaju = document.querySelector("#precoCaju");

    switch (tipoDoce) {
        case "pacoca":
            var inputcontagem = document.querySelector("#ContPacoca");
            var preco = parseInt(inputcontagem.value) * valorPacoca;
            precoPacoca.value = ("R$ " + preco.toFixed(2)).replace(".", ".");
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

        default:
            break;
    }

    var valorTotalinput = document.querySelector("#precototal");
    var valorTotal = converterStringParaFloat(precoPacoca.value) + converterStringParaFloat(precoCaju.value) + converterStringParaFloat(precoBeij.value) + converterStringParaFloat(precoAmore.value);
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
        case "pacoca":
            var inputcontagem = document.querySelector("#ContPacoca");
            var ContagemPaco = inputcontagem.value
            var novovalor = parseInt(ContagemPaco) + 1;
            inputcontagem.value = novovalor;
            break;

        case "cajuzinho":
            var inputcontagem1 = document.querySelector("#ContCajuzinho");
            var ContagemCaju = inputcontagem1.value
            var novovalor1 = parseInt(ContagemCaju) + 1;
            inputcontagem1.value = novovalor1;
            break;

        case "beijinho":
            var inputcontagem1 = document.querySelector("#ContBeijinho");
            var ContagemBeiji = inputcontagem1.value
            var novovalor2 = parseInt(ContagemBeiji) + 1;
            inputcontagem1.value = novovalor2;
            break;

        case "twoAmores":
            var inputcontagem1 = document.querySelector("#ContAmores");
            var ContagemAmores = inputcontagem1.value
            var novovalor3 = parseInt(ContagemAmores) + 1;
            inputcontagem1.value = novovalor3;
            break;

        default:
            break;

    }

    calcValor(tipoDoce)
}

function abaixarKg(tipoDoce) {
    console.log(tipoDoce);

    switch (tipoDoce) {

        case "pacoca":
            var inputcontagem = document.querySelector("#ContPacoca");
            var ContagemPaco = inputcontagem.value
            if (ContagemPaco > 0) {
                var novovalor = parseInt(ContagemPaco) - 1;
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
            if (ContagemBeiji > 0)
                var novovalor2 = parseInt(ContagemBeiji) - 1;
            inputcontagem2.value = novovalor2;
            break;

        case "twoAmores":
            var inputcontagem3 = document.querySelector("#ContAmores");
            var ContagemDoisAmo = inputcontagem3.value
            if (ContagemDoisAmo > 0)
                var novovalor3 = parseInt(ContagemDoisAmo) - 1;
            inputcontagem3.value = novovalor3;
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