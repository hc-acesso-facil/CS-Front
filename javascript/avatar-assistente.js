// Script para o avatar do assistente com GIF/imagem estática
document.addEventListener('DOMContentLoaded', function() {
    // Função para mostrar o GIF animado (assistente falando)
    function mostrarAssistenteFalando(elemento) {
        if (elemento) {
            const img = elemento.querySelector('img');
            if (img) {
                img.src = '../image/assistente/assistente-falando.gif';
            }
        }
    }
    
    // Função para mostrar a imagem estática (assistente em repouso)
    function mostrarAssistenteRepouso(elemento) {
        if (elemento) {
            const img = elemento.querySelector('img');
            if (img) {
                img.src = '../image/assistente/assistente-estatico.png';
            }
        }
    }
    
    // Função para mostrar o GIF animado no chat (assistente falando)
    function mostrarChatFalando(elemento) {
        if (elemento) {
            const img = elemento.querySelector('img');
            if (img) {
                img.src = '../image/assistente/assistente-falando.gif';
            }
        }
    }
    
    // Função para mostrar a imagem estática no chat (assistente em repouso)
    function mostrarChatRepouso(elemento) {
        if (elemento) {
            const img = elemento.querySelector('img');
            if (img) {
                img.src = '../image/assistente/assistente-estatico.png';
            }
        }
    }
    
    // Animar o assistente flutuante ao passar o mouse
    const assistenteFlutuante = document.querySelector('.assistente-flutuante');
    if (assistenteFlutuante) {
        const avatarAssistente = assistenteFlutuante.querySelector('.avatar-assistente');
        
        assistenteFlutuante.addEventListener('mouseenter', function() {
            mostrarAssistenteFalando(avatarAssistente);
        });
        
        assistenteFlutuante.addEventListener('mouseleave', function() {
            mostrarAssistenteRepouso(avatarAssistente);
        });
        
        // Iniciar animação brevemente quando a página carrega
        setTimeout(function() {
            mostrarAssistenteFalando(avatarAssistente);
            
            setTimeout(function() {
                mostrarAssistenteRepouso(avatarAssistente);
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
                
                mostrarChatFalando(ultimoAvatar);
                
                setTimeout(function() {
                    mostrarChatRepouso(ultimoAvatar);
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
                    mostrarChatFalando(avatarBot);
                    
                    setTimeout(function() {
                        mostrarChatRepouso(avatarBot);
                    }, 2000);
                }
            });
        });
    }
});
