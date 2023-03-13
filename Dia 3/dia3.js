const pergunta = prompt("Qual a sua área de interesse? Digite 1 para Front-end, 2 para Back-end.");

switch (pergunta) {
  case "1":
    // Perguntas específicas para Front-end
    const frontEnd = prompt("Você quer aprender React ou Vue? Digite 1 para React e 2 para Vue");
    if (frontEnd == "1") {
      // Mais perguntas específicas para React
      const escolha = prompt("Você quer seguir se aprofundando na área de Front-End ou virar um Dev Full-Stack? Responda com 1 para Front-End e 2 para Full-Stack");
      if (escolha == 1) {
        alert("Você está no caminho certo para se tornar um Dev Front-End!");
      } else {
        alert("Você está no caminho certo para se tornar um Dev Full-Stack!");
      }
    } else if (frontEnd == "2") {
      // Mais perguntas específicas para Vue
      const escolha = prompt("Você quer seguir se aprofundando na área de Front-End ou virar um Dev Full-Stack? Responda com 1 para Front-End e 2 para Full-Stack");
      if (escolha == 1) {
        alert("Você está no caminho certo para se tornar um Dev Front-End!");
      } else {
        alert("Você está no caminho certo para se tornar um Dev Full-Stack!");
      }
    } else {
      // Resposta inválida
      alert("Resposta inválida");
    }
    break;
  
  case "2":
    // Perguntas específicas para Back-end
    const backEnd = prompt("Você quer aprender C# ou Java? Digite 1 para C# e 2 para Java");
    if (backEnd == "1") {
      // Mais perguntas específicas para C#
      const escolha = prompt("Você quer seguir se aprofundando na área de Back-End ou virar um Dev Full-Stack? Responda com 1 para Back-End e 2 para Full-Stack");
      if (escolha == 1) {
        alert("Você está no caminho certo para se tornar um Dev Back-End!");
      } else {
        alert("Você está no caminho certo para se tornar um Dev Full-Stack!");
      }
    } else if (backEnd == "2") {
      // Mais perguntas específicas para Java
      const escolha = prompt("Você quer seguir se aprofundando na área de Back-End ou virar um Dev Full-Stack? Responda com 1 para Back-End e 2 para Full-Stack");
      if (escolha == 1) {
        alert("Você está no caminho certo para se tornar um Dev Back-End!");
      } else {
        alert("Você está no caminho certo para se tornar um Dev Full-Stack!");
      }
    } else {
      // Resposta inválida
        alert("Resposta inválida");
    }
    break;

    default:
        // Resposta inválida
        alert("Resposta inválida");
        const pergunta = prompt("Qual a sua área de interesse? Digite 1 para Front-end, 2 para Back-end.");
}

let respostaLinguagem = "";

while(respostaLinguagem !== "2") {
  respostaLinguagem = prompt("Você estuda alguma outra lingua? Responda com 1 para SIM e 2 para NÃO");
    if (respostaLinguagem == "1") {
        alert("Que legal!");
        respostaLinguagem = prompt("Qual outra linguagem você estuda?");
        if (respostaLinguagem == "JavaScript") {
            alert("Que legal, você está no caminho certo para se tornar um Dev Full-Stack!");
        } else if (respostaLinguagem == "C#") {
            alert("Boa, vai ser bom para jogos");
        } else if (respostaLinguagem == "Java") {
            alert("Boa, vai ser bom para alguma coisa");
        } else if (respostaLinguagem == "Python") {
            alert("Boa, vai ser bom para AI");
        } else {
            alert("Que legal!");
        }
    } else if (respostaLinguagem == "2") {
        alert("Ok, encerrando o questionário");
    } else{
        alert("Resposta inválida");
    }
}
