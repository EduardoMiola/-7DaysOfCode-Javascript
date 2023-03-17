function limpar() {
    let lista = document.getElementById("resultadoButton");
    while (document.getElementById("resultadoButton")) {
        document.getElementById("resultadoButton").remove();
    }
}

function dividir(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let resultado = numero1/numero2;
    print(resultado);
}

function multiplicar(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let resultado = numero1*numero2;
    print(resultado);
}

function somar(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let resultado = parseInt(numero1) + parseInt(numero2);
    print(resultado);
}

function subtrair(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let resultado = numero1-numero2;
    print(resultado);
}

function print(resultado){
    let resultadoPrint = document.createElement("p");
    resultadoPrint.innerHTML = resultado;
    resultadoPrint.className = "resultadoButton";
    resultadoPrint.id = "resultadoButton";
    document.body.appendChild(resultadoPrint);
}