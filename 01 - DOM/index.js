// Exercício 1

function botao() {
  let paragrafo = document.getElementById("paragrafo");

  let nome = prompt("Digite seu nome");

  paragrafo.innerText = `E aí ${nome}! Você está deixando seu site dinâmico.`;
}

// Exercício 2

let clicar = 0;
let novoParagrafo = document.getElementById("paragrafo");

function clique() {
  clicar++;
  novoParagrafo.innerText = `O contador está em ${clicar} cliques`;
}
function zerar() {
  clicar = 0;
  novoParagrafo.innerText = `O contador está em ${clicar} cliques`;
}
