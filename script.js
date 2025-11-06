// Função para corrigir layout no mobile
function corrigirLayoutMobile() {
    if (window.innerWidth <= 768) {
        // Forçar padding correto no main-content
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.style.padding = '10px';
            mainContent.style.marginLeft = '70px';
        }
        
        // Forçar largura total nos containers
        const containers = document.querySelectorAll('.equipamentos-container, .eventos-container');
        containers.forEach(container => {
            container.style.width = '100%';
            container.style.margin = '10px 0';
            container.style.padding = '15px 10px';
        });
    }
}

// Executar quando carregar e quando redimensionar
document.addEventListener('DOMContentLoaded', corrigirLayoutMobile);
window.addEventListener('resize', corrigirLayoutMobile);
window.addEventListener('orientationchange', corrigirLayoutMobile);

// Executar também quando trocar de página
function mostrarPagina(paginaId) {
    // Seu código atual de troca de página...
    
    // Corrigir layout após trocar
    setTimeout(corrigirLayoutMobile, 100);
}