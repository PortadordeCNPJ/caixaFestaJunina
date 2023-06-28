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

        default:
            break;
    }

    var valorTotalinput = document.querySelector("#precototal");
    var valorTotal = converterStringParaFloat(precoPacoca.value) + converterStringParaFloat(precoCaju.value) + converterStringParaFloat(precoBeij.value);
    valorTotalinput.value = ("R$ " + valorTotal.toFixed(2)).replace(".", ",")

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
            var ContagemCaju = inputcontagem1.value
            var novovalor1 = parseInt(ContagemCaju) + 1;
            inputcontagem1.value = novovalor1;
            break;

        default:
            break;

    }
    
    calcValor(tipoDoce)
}

function abaixarKg(tipoDoce) {
    console.log(tipoDoce);
    if (tipoDoce == "pacoca") {
        var inputcontagem = document.querySelector("#ContPacoca");
        var ContagemPaco = inputcontagem.value
        if (ContagemPaco > 0) {
            var novovalor = parseInt(ContagemPaco) - 1;
            inputcontagem.value = novovalor;
        }
    }
    else

        if (tipoDoce == "cajuzinho") {
            var inputcontagem1 = document.querySelector("#ContCajuzinho");
            var ContagemCaju = inputcontagem1.value
            if (ContagemCaju > 0) {
                var novovalor1 = parseInt(ContagemCaju) - 1;
                inputcontagem1.value = novovalor1;
            }
        }
    calcValor(tipoDoce)
}


