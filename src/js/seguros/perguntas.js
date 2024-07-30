const perguntas = document.querySelectorAll(".item");

perguntas.forEach(function (pergunta) {
  pergunta.addEventListener("click", function () {
    const perguntaAtiva = document.querySelector(".ativo");    
    
    if (perguntaAtiva) {
      pergunta.classList.add("ativo");
      perguntaAtiva.classList.remove("ativo");
    }else{
      pergunta.classList.add("ativo");
    }
  });
});
