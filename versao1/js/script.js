let cards = document.querySelectorAll(".card-destino");
cards.forEach(function (card) {
    let botaoCuriosidade = card.querySelector(".botao-curiosidade")
    let botaoFavorito = card.querySelector(".botao-favorito")
    let curiosidade = card.querySelector(".curiosidade")

    botaoCuriosidade.addEventListener("click", function () {
        if (curiosidade.hidden) {
            curiosidade.hidden = false
            botaoCuriosidade.setAttribute("aria-expanded", "true")
            botaoCuriosidade.textContent = "ocultar curiosidades"

        } else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute("aria-expanded", "false")
            botaoCuriosidade.textContent = "ver curiosidades"
        }
    })

    botaoFavorito.addEventListener("click", function(){

       let favoritado = card.classList.toggle("favoritado")

        botaoFavorito.setAttribute("aria-pressed", favoritado)

        if(favoritado)
            botaoFavorito.textContent= "★ favoritado"

    })

});