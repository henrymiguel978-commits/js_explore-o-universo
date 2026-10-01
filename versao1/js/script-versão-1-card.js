// procure e selcione o elemento com a classe card-destino
// e guarde em uma variavel chamada primeiroCard
let primeiroCard = document.querySelector('.card-destino')
// Procure e selecione o botçao de curiosidade da lua
let botaoCuriosidade = document.querySelector(".botao-curiosidade")

// Procure e selecione o parágrafo com a curiosidade sobre a lua
let curiosidade = document.querySelector(".curiosidade")

/* Monitore o clique no botão de curiosidade e, quando acontecer o clique, verifique SE a curiosidade esta oculta.
se esttiver, faça visivel, mude o aria-expanded para true e troque o texto do botão para "Ocultar curiosidade". */

botaoCuriosidade.addEventListener("click", function(){
    if(curiosidade) {
        curiosidade.hidden =false;

        botaoCuriosidade.setAttribute("aria-expanded","true");

        botaoCuriosidade.textContent = "ocultar cuirosidade";
    
        } else{
            curiosidade.hidden=true;
            botaoCuriosidade.setAttribute("aria-expanded", "false")
            botaoCuriosidade.textContent = "Ver curiosidades"
        }
    });