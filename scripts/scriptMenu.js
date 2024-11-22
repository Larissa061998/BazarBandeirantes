// Seleciona os elementos necessários
var iconMenu = document.getElementById('icon-menu');
var menu = document.getElementById('menumob');
var produtosLink = document.querySelector('.menu-item-produtosmob');
var submenu = document.querySelector('.submenumob');

iconMenu.addEventListener('click', () => {
    menu.style.display = 'flex';
});

// Exibe ou esconde o submenu ao clicar em "Produtos"
produtosLink.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o redirecionamento padrão do link
    submenumob.classList.toggle('open-submenumob');
});


//Botao Voltar ao Topo
// Seleciona o botão
const voltarTopo = document.getElementById("voltarTopo");

// Detecta o scroll da página
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Mostra o botão se o scroll passar de 200px
    voltarTopo.classList.add("show");
  } else {
    // Esconde o botão se o scroll for menor que 200px
    voltarTopo.classList.remove("show");
  }
});

// Comportamento de voltar ao topo
voltarTopo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll suave até o topo
});

