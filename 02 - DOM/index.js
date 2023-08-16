const cardsHTML = document.getElementsByClassName("card");
console.log(cardsHTML);

for (const div of cardsHTML) {
  console.log(div);

  div.setAttribute("style", "background-color: #e16e0e");
}

const titulosCardHTML = document.querySelectorAll(".titulo-card");

for (const titulo of titulosCardHTML) {
  console.log(titulo);

  titulo.setAttribute("style", "color: #2b385b", "font-size:20px");

  titulo.innerHTML = "Meu Card";
}

const descricoesCardHTML = document.querySelectorAll(".card-descricao");

for (const descricao of descricoesCardHTML) {
  descricao.setAttribute("style", "margin:30px 0; color:white; font-weight: 600; ");

  descricao.innerHTML = "Descrição modificada pelo JavaScript";
}

const botoesCardEditarHTML = document.querySelectorAll(".botao-editar");

for (const botaoEditar of botoesCardEditarHTML) {
  botaoEditar.setAttribute("style", "padding: 5px 12px; border-radius: 15px; color: white; background-color: green");

  botaoEditar.setAttribute("onclick", "editarCard()");
}

const botoesCardApagarHTML = document.querySelectorAll(".botao-apagar");

for (const botaoApagar of botoesCardApagarHTML) {
  botaoApagar.setAttribute("style", "padding: 5px 12px; border-radius: 15px; color: white; background-color: red");

  botaoApagar.setAttribute("onclick", "apagarCard()");
}

function editarCard() {
  alert("Clicou em editar!");
}

function apagarCard() {
  const confirma = confirm("Você está certo da exclusão?");

  if (confirma) {
    alert("Confirmou");
  } else {
    alert("Cancelou");
  }
}
