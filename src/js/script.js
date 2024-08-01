//Ativar links de MENU
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
  const url = location.href;
  const href = link.href;
  
  if(url.includes(href)){
    link.classList.add("ativo")
  }
}

links.forEach(ativarLink);

//Ativar items de ORÇAMENTO
const paramentro = new URLSearchParams(location.search);

function ativarProduto(paramentro){
  const elemento = document.getElementById(paramentro);

  if(elemento){
    elemento.checked = true;
  }
}

paramentro.forEach(ativarProduto);

//Fazendo um acordeon em SEGUROS-PERGUNTAS FREQUENTES
const perguntas = document.querySelectorAll(".item");

function ativarDesativarPergunta(pergunta) {
  pergunta.addEventListener("click", function () {
    const perguntaAtiva = document.querySelector(".ativo");    
    
    if (perguntaAtiva) {
      pergunta.classList.add("ativo");
      perguntaAtiva.classList.remove("ativo");
    }else{
      pergunta.classList.add("ativo");
    }
  });
}

perguntas.forEach(ativarDesativarPergunta);

console.log("executando");