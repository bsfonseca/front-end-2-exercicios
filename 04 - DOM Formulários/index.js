const formularioHTML = document.getElementById("formulario-cadastro");

formularioHTML.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value;
});
