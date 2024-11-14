// Seleciona os elementos necessários
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const produtosLink = document.querySelector('.menu-item-produtos');
const submenu = document.querySelector('.submenu');

// Exibe o menu lateral ao clicar no ícone de 3 linhas
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Exibe ou esconde o submenu ao clicar em "Produtos"
produtosLink.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o redirecionamento padrão do link
    submenu.classList.toggle('open-submenu');
});

