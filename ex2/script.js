const input = document.querySelector("#input-name");
const mensagem = document.querySelector("#welcome")
const botaoEnviar = document.querySelector("#btn-save");

if (localStorage.getItem("nome")) {
    mensagem.textContent = `Seja bem vindo, ${localStorage.getItem("nome")}!`
}

botaoEnviar.addEventListener("click", () => {
    if (!input.value) return;

    localStorage.setItem("nome", input.value);
    mensagem.textContent = `Seja bem vindo, ${localStorage.getItem("nome")}!`
})



