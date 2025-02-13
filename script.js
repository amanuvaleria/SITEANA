document.addEventListener("DOMContentLoaded", function () {
    // Efeito de aparecer ao rolar a página
    const elementos = document.querySelectorAll(".fade-in");

    function verificarVisibilidade() {
        const alturaJanela = window.innerHeight;
        elementos.forEach(el => {
            const posicao = el.getBoundingClientRect().top;
            if (posicao < alturaJanela * 0.85) {
                el.classList.add("visivel");
            }
        });
    }

    window.addEventListener("scroll", verificarVisibilidade);
    verificarVisibilidade(); // Verifica ao carregar a página

    // Botão Voltar ao Topo
    const botaoTopo = document.createElement("button");
    botaoTopo.innerText = "⬆️";
    botaoTopo.id = "voltarTopo";
    document.body.appendChild(botaoTopo);

    botaoTopo.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            botaoTopo.classList.add("visivel");
        } else {
            botaoTopo.classList.remove("visivel");
        }
    });
});
