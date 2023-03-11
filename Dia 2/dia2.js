const nome = prompt("Digite o seu nome");
const idade = prompt("Digite a sua idade");
const linguagem = prompt("Digite a sua linguagem de programação que está aprendendo");

alert("Olá " + nome + ", você tem " + idade + " anos e está aprendendo " + linguagem);

const resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com 1 para SIM e 2 para NÃO`);

if (resposta == 1) {
    alert("Que legal, continue assim!");
} else {
    alert("Que pena, mas continue estudando!");
}
