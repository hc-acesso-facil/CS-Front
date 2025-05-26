// Animação para o assistente virtual
document.addEventListener('DOMContentLoaded', function() {
    // Referência ao elemento do assistente flutuante
    const assistenteFlutuante = document.querySelector('.assistente-flutuante');
    const assistenteImagem = document.querySelector('.assistente-imagem');
    const balaoConversa = document.querySelector('.balao-conversa');
    
    // Função para iniciar a animação de fala
    function iniciarAnimacaoFala() {
        assistenteFlutuante.classList.add('falando');
        
        // Alterna o texto do balão para simular fala
        let textos = [
            "Precisa de ajuda?",
            "Posso ajudar você!",
            "Estou aqui para auxiliar"
        ];
        
        let indiceTexto = 0;
        
        // Alterna o texto a cada 2 segundos
        const intervaloTexto = setInterval(() => {
            indiceTexto = (indiceTexto + 1) % textos.length;
            balaoConversa.textContent = textos[indiceTexto];
        }, 2000);
        
        // Para a animação após 6 segundos
        setTimeout(() => {
            pararAnimacaoFala();
            clearInterval(intervaloTexto);
            balaoConversa.textContent = "Precisa de ajuda?";
        }, 6000);
    }
    
    // Função para parar a animação de fala
    function pararAnimacaoFala() {
        assistenteFlutuante.classList.remove('falando');
    }
    
    // Inicia a animação quando a página carrega
    setTimeout(iniciarAnimacaoFala, 2000);
    
    // Inicia a animação quando o mouse passa sobre o assistente
    assistenteFlutuante.addEventListener('mouseenter', iniciarAnimacaoFala);
    
    // Implementação da animação para a página do assistente
    const avatarBots = document.querySelectorAll('.avatar-bot');
    
    if (avatarBots.length > 0) {
        // Adiciona classe de animação aos avatares do chat
        function animarAvatares() {
            avatarBots.forEach(avatar => {
                avatar.classList.add('falando');
                
                setTimeout(() => {
                    avatar.classList.remove('falando');
                }, 3000);
            });
        }
        
        // Anima os avatares quando a página carrega
        setTimeout(animarAvatares, 1000);
        
        // Anima os avatares quando o usuário clica no botão de enviar
        const botaoEnviar = document.getElementById('enviar-mensagem');
        if (botaoEnviar) {
            botaoEnviar.addEventListener('click', function() {
                const primeiroAvatar = avatarBots[0];
                if (primeiroAvatar) {
                    primeiroAvatar.classList.add('falando');
                    
                    setTimeout(() => {
                        primeiroAvatar.classList.remove('falando');
                    }, 3000);
                }
            });
        }
    }
});
