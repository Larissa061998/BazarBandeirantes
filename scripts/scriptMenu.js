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


