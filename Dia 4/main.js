let erros = 0;
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

while (erros != 3){
    let pergunta = prompt("Qual é o número de 1 à 10 que estou pensando?");
    if (pergunta == numeroAleatorio){
        alert("Parabéns! Você acertou!");
        break;
    } else {
        erros++;
        alert("Você errou! Você tem mais " + (3 - erros) + " tentativas.");
    }
}