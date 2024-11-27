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

// Função para iniciar o carrossel de avaliacoes
const carrossel = document.querySelector('.avaliacoes-carrossel');
const avaliacoes = document.querySelectorAll('.avaliacao');
let currentIndex = 0;

function iniciarCarrossel() {
    const cardWidth = avaliacoes[0].offsetWidth + 20; // Inclui o gap
    carrossel.style.transform = `translateX(0)`; // Garante o início

    setInterval(() => {
        carrossel.style.transition = 'transform 0.5s ease-in-out';
        carrossel.style.transform = `translateX(-${cardWidth}px)`;

        // Após a transição, reposiciona os elementos
        setTimeout(() => {
            carrossel.style.transition = 'none'; // Remove a transição
            const primeiroCard = carrossel.firstElementChild;
            carrossel.appendChild(primeiroCard); // Move o primeiro card para o final
            carrossel.style.transform = `translateX(0)`; // Reseta a posição
        }, 500); // Tempo igual ao da transição
    }, 5000); // Tempo de intervalo (5 segundos)
}

iniciarCarrossel();