const lista = document.getElementById("lista-recados");

axios.get("http://localhost:3000/usuarios/1/recados").then((result) => {
  console.log(result.data.dado);
  for (const recados of result.data.dado) {
    lista.innerHTML += `<li>Título: ${recados.titulo} - Descrição: ${recados.descricao}</li>`;
  }
});
