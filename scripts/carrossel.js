//CARROSSEL

let indiceAtual = 0;

// Função para exibir a imagem correspondente ao índice
function mostrarImagem(indice) {
    const imagens = document.querySelector(".imagens-carrossel");
    const pontos = document.querySelectorAll(".ponto");
    const totalImagens = imagens.children.length;

    // Ajusta o índice para evitar valores fora do limite
    if (indice >= totalImagens) {
        indiceAtual = 0;
    } else if (indice < 0) {
        indiceAtual = totalImagens - 1;
    } else {
        indiceAtual = indice;
    }

    // Desloca as imagens horizontalmente para mostrar a imagem atual
    imagens.style.transform = `translateX(-${indiceAtual * 100}%)`;

    // Atualiza os indicadores (bolinhas)
    pontos.forEach((ponto, i) => {
        ponto.classList.toggle("active", i === indiceAtual);
    });
}

// Avançar para a próxima imagem
function imagemProxima() {
    mostrarImagem(indiceAtual + 1);
}

// Retroceder para a imagem anterior
function imagemAnterior() {
    mostrarImagem(indiceAtual - 1);
}

// Selecionar uma imagem específica ao clicar na bolinha
function selecionarImagem(indice) {
    mostrarImagem(indice);
}

// Intervalo automático de 5 segundos
setInterval(() => {
    imagemProxima();
}, 5000); // 5000 ms = 5 segundos

// Inicializar o carrossel na primeira imagem
mostrarImagem(indiceAtual);

// Opção para loop infinito
const carouselTrack = document.querySelector('.carousel-track');

// Clona os itens para criar um loop infinito
function cloneCarouselItems() {
    const items = carouselTrack.children;
    for (let i = 0; i < items.length; i++) {
        const clone = items[i].cloneNode(true);
        carouselTrack.appendChild(clone);
    }
}

cloneCarouselItems();