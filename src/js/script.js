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

 //Galeria de imagens em BIBCICLETAS-INTERNAS
const galeria = document.querySelectorAll(".fotos img");
const galeriaContainer = document.querySelector(".fotos");

function trocarImagem(event){
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 925px)").matches;

  if(media){
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img){
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);