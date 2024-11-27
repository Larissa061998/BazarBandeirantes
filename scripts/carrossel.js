//CARROSSEL
const carrossel = document.querySelector('.avaliacoes-carrossel');
const avaliacoes = document.querySelectorAll('.avaliacao');
let currentIndex = 0;

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


function passarCarrossel() {
    // Move o carrossel
    currentIndex++;
    if (currentIndex > avaliacoes.length - 3) {
        currentIndex = 0; // Reinicia o índice ao final
    }

    // Calcula o deslocamento necessário
    const deslocamento = currentIndex * (avaliacoes[0].offsetWidth + 20);
    carrossel.style.transform = `translateX(-${deslocamento}px)`;
}

// Inicia o carrossel automático a cada 5 segundos
setInterval(passarCarrossel, 5000);


