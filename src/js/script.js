//Ativar links do menun
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
  const url = location.href;
  const href = link.href;
  
  if(url.includes(href)){
    link.classList.add("ativo")
  }
}

links.forEach(ativarLink);

//ATIVAR ITEMS DO ORÇAMENTO

const paramentro = new URLSearchParams(location.search);

function ativarProduto(paramentro){
  const elemento = document.getElementById(paramentro);

  if(elemento){
    elemento.checked = true;
  }
}

paramentro.forEach(ativarProduto);

console.log("executando");