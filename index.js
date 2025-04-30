// Arquivo: index.js
// JavaScript para a loja Belle Rose

// Adicionar efeito de brilho diagonal à logo
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar animação ao logo
    const logoPlaceholder = document.querySelector('.logo-placeholder');
    if (logoPlaceholder) {
        const glossyEffect = document.createElement('div');
        glossyEffect.className = 'glossy-effect';
        glossyEffect.style.position = 'absolute';
        glossyEffect.style.top = '0';
        glossyEffect.style.left = '0';
        glossyEffect.style.right = '0';
        glossyEffect.style.bottom = '0';
        glossyEffect.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)';
        glossyEffect.style.backgroundSize = '200% 200%';
        glossyEffect.style.animation = 'glossyDiagonal 6s ease-in-out infinite';
        glossyEffect.style.zIndex = '1';
        
        // Adicionar a animação se não existir ainda
        if (!document.querySelector('style#dynamic-styles')) {
            const style = document.createElement('style');
            style.id = 'dynamic-styles';
            style.textContent = `
                @keyframes glossyDiagonal {
                    0% { background-position: 200% -100%; opacity: 0; }
                    50% { opacity: 0.7; }
                    100% { background-position: -100% 200%; opacity: 0; }
                }
                
                @keyframes linkShimmerDiagonal {
                    0% { background-position: 200% -100%; }
                    100% { background-position: -100% 200%; }
                }
            `;
            document.head.appendChild(style);
        }
        
        logoPlaceholder.appendChild(glossyEffect);
    }
    
    // Função para verificar se a loja está aberta ou fechada
    function checkStoreStatus() {
        const now = new Date();
        const day = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
        const hour = now.getHours();
        const minute = now.getMinutes();
        const currentTime = hour * 60 + minute;
        
        // Definição dos horários de funcionamento
        const openTime = 9 * 60; // 09:00
        const closeTimeWeekday = 18 * 60; // 18:00
        const closeTimeSaturday = 13 * 60; // 13:00
        
        let isOpen = false;
        
        // Verifica se está dentro do horário de funcionamento
        if (day >= 1 && day <= 5) { // Segunda a Sexta
            isOpen = currentTime >= openTime && currentTime < closeTimeWeekday;
        } else if (day === 6) { // Sábado
            isOpen = currentTime >= openTime && currentTime < closeTimeSaturday;
        }
        
        // Atualiza o indicador de status
        const statusEl = document.getElementById('status');
        if (statusEl) {
            if (isOpen) {
                statusEl.innerHTML = '<div class="status-dot"></div><span>Loja Aberta</span>';
                statusEl.className = 'status-indicator status-open';
            } else {
                statusEl.innerHTML = '<div class="status-dot"></div><span>Loja Fechada</span>';
                statusEl.className = 'status-indicator status-closed';
            }
        }
    }
    
    // Efeito de hover nos itens de redes sociais
    function addSocialItemsHoverEffect() {
        const socialItems = document.querySelectorAll('.social-item');
        socialItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(10px)';
            });
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0)';
            });
        });
    }
    
    // Adicionar efeito de brilho nos links sociais
    function addShimmerEffects() {
        document.querySelectorAll('.social-link').forEach(link => {
            // Adicionar efeito de brilho apenas aos links que ainda não o têm
            if (!link.querySelector('.shimmer-effect')) {
                const shimmerEffect = document.createElement('div');
                shimmerEffect.className = 'shimmer-effect';
                shimmerEffect.style.position = 'absolute';
                shimmerEffect.style.top = '0';
                shimmerEffect.style.left = '0';
                shimmerEffect.style.right = '0';
                shimmerEffect.style.bottom = '0';
                shimmerEffect.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%)';
                shimmerEffect.style.backgroundSize = '200% 200%';
                shimmerEffect.style.animation = 'linkShimmerDiagonal 4s ease-in-out infinite';
                shimmerEffect.style.pointerEvents = 'none';
                shimmerEffect.style.zIndex = '1';
                shimmerEffect.style.opacity = '0';
                
                link.style.position = 'relative';
                link.style.overflow = 'hidden';
                link.appendChild(shimmerEffect);
                
                // Adicionar efeito de hover para mostrar o brilho
                link.addEventListener('mouseenter', () => {
                    shimmerEffect.style.opacity = '1';
                });
                
                link.addEventListener('mouseleave', () => {
                    shimmerEffect.style.opacity = '0';
                });
            }
        });
    }
    
    // Executar as funções
    checkStoreStatus();
    addSocialItemsHoverEffect();
    addShimmerEffects();
    
    // Atualiza o status a cada minuto
    setInterval(checkStoreStatus, 60000);
});// Arquivo: index.js
// JavaScript para a loja Belle Rose
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar animação ao logo
    const logoPlaceholder = document.querySelector('.logo-placeholder');
    if (logoPlaceholder) {
        logoPlaceholder.style.position = 'relative';
        logoPlaceholder.style.overflow = 'hidden';
        
        const glossyEffect = document.createElement('div');
        glossyEffect.style.position = 'absolute';
        glossyEffect.style.top = '0';
        glossyEffect.style.left = '0';
        glossyEffect.style.right = '0';
        glossyEffect.style.bottom = '0';
        glossyEffect.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)';
        glossyEffect.style.backgroundSize = '200% 200%';
        glossyEffect.style.animation = 'glossyDiagonal 6s ease-in-out infinite';
        glossyEffect.style.zIndex = '1';
        
        // Adicionar a animação se não existir ainda
        if (!document.querySelector('style#dynamic-styles')) {
            const style = document.createElement('style');
            style.id = 'dynamic-styles';
            style.textContent = `
                @keyframes glossyDiagonal {
                    0% { background-position: 200% -100%; opacity: 0; }
                    50% { opacity: 0.7; }
                    100% { background-position: -100% 200%; opacity: 0; }
                }
                
                @keyframes linkShimmerDiagonal {
                    0% { background-position: 200% -100%; }
                    100% { background-position: -100% 200%; }
                }
            `;
            document.head.appendChild(style);
        }
        
        logoPlaceholder.appendChild(glossyEffect);
    }
    
    // Função para verificar se a loja está aberta ou fechada
    function checkStoreStatus() {
        const now = new Date();
        const day = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
        const hour = now.getHours();
        const minute = now.getMinutes();
        const currentTime = hour * 60 + minute;
        
        // Definição dos horários de funcionamento
        const openTime = 9 * 60; // 09:00
        const closeTimeWeekday = 18 * 60; // 18:00
        const closeTimeSaturday = 13 * 60; // 13:00
        
        let isOpen = false;
        
        // Verifica se está dentro do horário de funcionamento
        if (day >= 1 && day <= 5) { // Segunda a Sexta
            isOpen = currentTime >= openTime && currentTime < closeTimeWeekday;
        } else if (day === 6) { // Sábado
            isOpen = currentTime >= openTime && currentTime < closeTimeSaturday;
        }
        
        // Atualiza o indicador de status
        const statusEl = document.getElementById('status');
        if (statusEl) {
            if (isOpen) {
                statusEl.innerHTML = '<div class="status-dot"></div><span>Loja Aberta</span>';
                statusEl.className = 'status-indicator status-open';
            } else {
                statusEl.innerHTML = '<div class="status-dot"></div><span>Loja Fechada</span>';
                statusEl.className = 'status-indicator status-closed';
            }
        }
    }
    
    // Efeito de hover nos itens de redes sociais
    function addSocialItemsHoverEffect() {
        const socialItems = document.querySelectorAll('.social-item');
        socialItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(10px)';
            });
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0)';
            });
        });
    }
    
    // Adicionar efeito de brilho nos links sociais
    function addShimmerEffects() {
        document.querySelectorAll('.social-link').forEach(link => {
            // Adicionar efeito de brilho apenas aos links que ainda não o têm
            if (!link.querySelector('.shimmer-effect')) {
                const shimmerEffect = document.createElement('div');
                shimmerEffect.className = 'shimmer-effect';
                shimmerEffect.style.position = 'absolute';
                shimmerEffect.style.top = '0';
                shimmerEffect.style.left = '0';
                shimmerEffect.style.right = '0';
                shimmerEffect.style.bottom = '0';
                shimmerEffect.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%)';
                shimmerEffect.style.backgroundSize = '200% 200%';
                shimmerEffect.style.animation = 'linkShimmerDiagonal 4s ease-in-out infinite';
                shimmerEffect.style.pointerEvents = 'none';
                shimmerEffect.style.zIndex = '1';
                shimmerEffect.style.opacity = '0';
                
                link.style.position = 'relative';
                link.style.overflow = 'hidden';
                link.appendChild(shimmerEffect);
                
                // Adicionar efeito de hover para mostrar o brilho
                link.addEventListener('mouseenter', () => {
                    shimmerEffect.style.opacity = '1';
                });
                
                link.addEventListener('mouseleave', () => {
                    shimmerEffect.style.opacity = '0';
                });
            }
        });
    }
    
    // Executar as funções
    checkStoreStatus();
    addSocialItemsHoverEffect();
    addShimmerEffects();
    
    // Atualiza o status a cada minuto
    setInterval(checkStoreStatus, 60000);
});
function checkStoreStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute;
    
    // Definição dos horários de funcionamento
    const openTime = 9 * 60; // 09:00
    const closeTimeWeekday = 18 * 60; // 18:00
    const closeTimeSaturday = 13 * 60; // 13:00
    
    let isOpen = false;
    
    // Verifica se está dentro do horário de funcionamento
    if (day >= 1 && day <= 5) { // Segunda a Sexta
        isOpen = currentTime >= openTime && currentTime < closeTimeWeekday;
    } else if (day === 6) { // Sábado
        isOpen = currentTime >= openTime && currentTime < closeTimeSaturday;
    }
    
    // Atualiza o indicador de status
    const statusEl = document.getElementById('status');
    
    if (isOpen) {
        statusEl.innerHTML = '<div class="status-dot"></div><span>Loja Aberta</span>';
        statusEl.className = 'status-indicator status-open';
    } else {
        statusEl.innerHTML = '<div class="status-dot"></div><span>Loja Fechada</span>';
        statusEl.className = 'status-indicator status-closed';
    }
}

// Efeito de hover nos itens de redes sociais
function addSocialItemsHoverEffect() {
    const socialItems = document.querySelectorAll('.social-item');
    socialItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
}

// Adicionar efeito de brilho diagonal aos links sociais
function addShimmerEffects() {
    // Criar a animação para os links
    const style = document.createElement('style');
    style.textContent = `
        .social-link::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0) 0%, 
                rgba(255, 255, 255, 0.3) 50%, 
                rgba(255, 255, 255, 0) 100%);
            background-size: 200% 200%;
            animation: linkShimmerDiagonal 4s ease-in-out infinite;
            pointer-events: none;
            z-index: 1;
            opacity: 0;
        }
        
        .social-link:hover::after {
            opacity: 1;
        }
        
        @keyframes linkShimmerDiagonal {
            0% { background-position: 200% -100%; }
            100% { background-position: -100% 200%; }
        }
        
        /* Adicionar efeito de brilho diagonal à logo também */
        .logo-placeholder::after {
            animation: glossyDiagonal 6s ease-in-out infinite;
            background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0) 0%, 
                rgba(255, 255, 255, 0.8) 50%, 
                rgba(255, 255, 255, 0) 100%);
            background-size: 200% 200%;
        }
        
        @keyframes glossyDiagonal {
            0% { background-position: 200% -100%; opacity: 0; }
            50% { opacity: 0.7; }
            100% { background-position: -100% 200%; opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Inicializa as funções quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    checkStoreStatus();
    addSocialItemsHoverEffect();
    addShimmerEffects();
    
    // Atualiza o status a cada minuto
    setInterval(checkStoreStatus, 60000);
});