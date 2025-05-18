// multilang.js - Suporte multilíngue simples para PT/EN
// Este script alterna o conteúdo das páginas entre português e inglês

// Função para trocar idioma
function setLanguage(lang) {
    localStorage.setItem('siteLang', lang); // Salva preferência no localStorage
    // Atualiza todos os elementos com data-pt/data-en
    document.querySelectorAll('[data-pt]').forEach(function(el) {
        el.textContent = el.getAttribute('data-' + lang);
    });
    // Atualiza placeholders
    document.querySelectorAll('input[data-pt], textarea[data-pt]').forEach(function(el) {
        el.placeholder = el.getAttribute('data-' + lang);
    });
    // Atualiza botões do menu de idioma
    document.getElementById('pt-btn').classList.toggle('active', lang === 'pt');
    document.getElementById('en-btn').classList.toggle('active', lang === 'en');
}

// Detecta idioma salvo no localStorage ou padrão do navegador
function getInitialLang() {
    var saved = localStorage.getItem('siteLang');
    if (saved) return saved;
    var nav = navigator.language || navigator.userLanguage || '';
    // Se o idioma começa com 'pt', usa português, senão usa inglês
    return nav.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

document.addEventListener('DOMContentLoaded', function() {
    // Sempre use o valor do localStorage, se existir, para manter a escolha do usuário
    var lang = getInitialLang();
    setLanguage(lang);
    document.getElementById('pt-btn').onclick = function() {
        setLanguage('pt');
    };
    document.getElementById('en-btn').onclick = function() {
        setLanguage('en');
    };
});
