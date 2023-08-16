const form = document.getElementById("form-login");
form.addEventListener("submit", loginBackend);

function loginBackend(event) {
  event.preventDefault();

  const body = {
    email: form.email.value,
    senha: form.senha.value,
  };

  axios
    .post("http://localhost:3000/login", body)
    .then((result) => {
      console.log(result);
      console.log("deu certo");

      // ir para a tela da lista
      window.location.href = "recados.html";
    })
    .catch((erro) => {
      console.log(erro);
      console.log("Deu errado!");

      // avisar o usuario quenão deu certo
      alert("Erro: email ou senha invalidos");
    });
}

// function loginBackendSemAsync(event) {
//   event.preventDefault();

//   const body = {
//     email: form.email.value,
//     senha: form.senha.value,
//   };

//   axios.post("http://localhost:3000/login", body).then((result) => {
//     if (result.data.ok) {
//       alert("Login feito com sucesso");
//     }
//   });
// }

// Para fazer o login
// Requisição POST, rota /login
// Passar email e senha no body
