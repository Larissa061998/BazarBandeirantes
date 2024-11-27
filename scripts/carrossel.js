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

// Duplicar as avaliações para evitar lacunas
avaliacoes.forEach((avaliacao) => {
    const clone = avaliacao.cloneNode(true);
    carrossel.appendChild(clone);
});

function passarCarrossel() {
    // Calcula o deslocamento com base na largura de um card
    const cardWidth = avaliacoes[0].offsetWidth + 20; // Inclui o gap
    currentIndex++;

    // Reinicia o carrossel quando chegar ao final
    if (currentIndex >= avaliacoes.length) {
        carrossel.style.transition = 'none'; // Remove a transição para reiniciar
        currentIndex = 0; // Volta ao início
        carrossel.style.transform = `translateX(0)`;
        setTimeout(() => {
            carrossel.style.transition = 'transform 0.5s ease-in-out'; // Restaura a transição
        });
    } else {
        carrossel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
}

// Inicia o carrossel automático a cada 5 segundos
setInterval(passarCarrossel, 5000);