//pegar elemento html dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");

//identificar click
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelecionado();

    selecionarBotaoCarrossel(botao);

    esconderImagemAtiva();

    mostrarImagemDeFundo(indice);
  });
});

//funções
function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function selecionarBotaoCarrossel(botao) {
  botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}