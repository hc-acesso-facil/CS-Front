// Script para o avatar animado do assistente
document.addEventListener('DOMContentLoaded', function() {
    // Função para iniciar a animação de fala
    function iniciarFala(elemento) {
        if (elemento) {
            elemento.classList.add('falando');
            
            // Para o assistente flutuante, adicionar classe ativo
            const avatarAssistente = elemento.querySelector('.avatar-assistente');
            if (avatarAssistente) {
                avatarAssistente.classList.add('ativo');
            }
        }
    }
    
    // Função para parar a animação de fala
    function pararFala(elemento) {
        if (elemento) {
            elemento.classList.remove('falando');
            
            // Para o assistente flutuante, remover classe ativo
            const avatarAssistente = elemento.querySelector('.avatar-assistente');
            if (avatarAssistente) {
                avatarAssistente.classList.remove('ativo');
            }
        }
    }
    
    // Animar o assistente flutuante ao passar o mouse
    const assistenteFlutuante = document.querySelector('.assistente-flutuante');
    if (assistenteFlutuante) {
        assistenteFlutuante.addEventListener('mouseenter', function() {
            iniciarFala(this);
        });
        
        assistenteFlutuante.addEventListener('mouseleave', function() {
            pararFala(this);
        });
        
        // Iniciar animação brevemente quando a página carrega
        setTimeout(function() {
            iniciarFala(assistenteFlutuante);
            
            setTimeout(function() {
                pararFala(assistenteFlutuante);
            }, 2000);
        }, 1000);
    }
    
    // Animar o avatar no chat quando mensagens são enviadas
    const botaoEnviar = document.getElementById('enviar-mensagem');
    if (botaoEnviar) {
        botaoEnviar.addEventListener('click', function() {
            const avatarBots = document.querySelectorAll('.avatar-bot');
            if (avatarBots.length > 0) {
                const ultimoAvatar = avatarBots[avatarBots.length - 1];
                
                iniciarFala(ultimoAvatar);
                
                setTimeout(function() {
                    pararFala(ultimoAvatar);
                }, 2000);
            }
        });
    }
    
    // Animar avatar ao clicar nas opções do chat
    const opcoesBots = document.querySelectorAll('.opcao-bot');
    if (opcoesBots.length > 0) {
        opcoesBots.forEach(function(opcao) {
            opcao.addEventListener('click', function() {
                const avatarBot = this.querySelector('.avatar-bot');
                if (avatarBot) {
                    iniciarFala(avatarBot);
                    
                    setTimeout(function() {
                        pararFala(avatarBot);
                    }, 2000);
                }
            });
        });
    }
});
