let lista_de_itens = [];
start();

function start() {
  if (localStorage.getItem("lista") != null) {
    lista_de_itens = JSON.parse(localStorage.getItem("lista"));
    showLista();
  }
}

function adicionar() {
    const item = document.getElementById("item").value;
    lista_de_itens.push(item);
    document.getElementById("item").value = "";
}

function limpar() {
    for (let i = 0; i < lista_de_itens.length; i++) {
      document.getElementById("lista").removeChild(document.getElementById("lista").childNodes[0]);
      localStorage.clear();
    }
    lista_de_itens = [];

}

function salvar() {
    localStorage.setItem("lista", JSON.stringify(lista_de_itens));
}

function showLista() {
    let listaElemento = document.getElementById("lista");
    for (let i = 0; i < lista_de_itens.length; i++) {
      let itemElemento = document.createElement("li");
      itemElemento.className = "listaItem";
      itemElemento.innerHTML = lista_de_itens[i];
      listaElemento.appendChild(itemElemento);
    }
    document.getElementById("lista").style.display = "block";
  }