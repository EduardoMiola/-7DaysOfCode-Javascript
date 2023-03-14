let lista_de_itens = [];
start();

/**
 * Inicializa o site
 * @param if tiver algo salvo no localStorage, ele carrega
 * @param if não tiver nada salvo, ele inicia uma lista vazia
 * @call showLista()
 */
function start() {
  if (localStorage.getItem("lista") !== null) {
    lista_de_itens = JSON.parse(localStorage.getItem("lista"));
    showLista();
  }
}

/**
 * Adiciona um item na lista
 * @param item pega o valor do input
 * @param lista_de_itens adiciona o item na lista
 * @return limpa o input
 */
function adicionar() {
    const item = document.getElementById("item").value;
    lista_de_itens.push(item);
    document.getElementById("item").value = "";
}


/**
 * Limpa a lista
 * @param for percorre a lista
 * @param remove o primeiro filho da lista
 * 
 */
function limpar() {
    for (let i = 0; i < lista_de_itens.length; i++) {
      document.getElementById("lista").removeChild(document.getElementById("lista").childNodes[0]);
    }
    lista_de_itens = [];
    localStorage.removeItem("lista");
}

/**
 * Salva a lista no localStorage
 * @param localStorage.setItem converte a lista em string
 */
function salvar() {
    localStorage.setItem("lista", JSON.stringify(lista_de_itens));
}

/**
 * Mostra a lista
 * @param listaElemento pega o elemento da lista
 * @param for percorre a lista
 * @param itemElemento cria um elemento li
 * @param itemElemento.className adiciona uma classe
 * @param itemElemento.innerHTML adiciona o valor do item
 * @param listaElemento.appendChild adiciona o item na lista
 * @param document.getElementById("lista").style.display = "block" mostra a lista
 */
function showLista() {
    const listaElemento = document.getElementById("lista");
    for (let i = 0; i < lista_de_itens.length; i++) {
      const itemElemento = document.createElement("li");
      itemElemento.className = "listaItem";
      itemElemento.innerHTML = lista_de_itens[i];
      listaElemento.appendChild(itemElemento);
    }
    document.getElementById("lista").style.display = "block";
  }