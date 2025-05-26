document.addEventListener('DOMContentLoaded', function() {
    // Código do menu hamburguer foi completamente removido
    // para atender à solicitação do usuário
    
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle('show');
            
            if (this.classList.contains('expanded')) {
                this.classList.remove('expanded');
            } else {
                this.classList.add('expanded');
            }
        });
    });
    
    const categoriaItems = document.querySelectorAll('.categoria-item');
    categoriaItems.forEach(item => {
        item.addEventListener('click', function() {
            categoriaItems.forEach(i => i.classList.remove('active'));
            
            this.classList.add('active');
            
            const secoes = document.querySelectorAll('.ajuda-secao');
            secoes.forEach(secao => secao.classList.add('hidden'));
            
            const categoria = this.getAttribute('data-categoria');
            document.getElementById(categoria).classList.remove('hidden');
        });
    });
    
    const chatbotMensagens = document.getElementById('chatbot-mensagens');
    const mensagemUsuario = document.getElementById('mensagem-usuario');
    const enviarMensagem = document.getElementById('enviar-mensagem');
    const opcoesBotoes = document.querySelectorAll('.opcao-bot');
    
    if (enviarMensagem && mensagemUsuario && chatbotMensagens) {
        enviarMensagem.addEventListener('click', function() {
            enviarMensagemUsuario();
        });
        
        mensagemUsuario.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                enviarMensagemUsuario();
            }
        });
        
        function enviarMensagemUsuario() {
            const texto = mensagemUsuario.value.trim();
            if (texto) {
                adicionarMensagem(texto, 'usuario');
                mensagemUsuario.value = '';
                setTimeout(() => {
                    let resposta = '';
                    
                    if (texto.toLowerCase().includes('consulta') || texto.toLowerCase().includes('agendar')) {
                        resposta = 'Para agendar uma consulta, você pode acessar a seção de Agendamentos no menu principal ou me dizer qual especialidade você precisa.';
                    } else if (texto.toLowerCase().includes('exame')) {
                        resposta = 'Para agendar ou consultar resultados de exames, acesse a seção de Agendamentos. Se precisar de ajuda para interpretar seus resultados, consulte seu médico.';
                    } else if (texto.toLowerCase().includes('senha') || texto.toLowerCase().includes('login')) {
                        resposta = 'Se você esqueceu sua senha, clique em "Esqueci senha" na tela de login. Se continuar com problemas, entre em contato com nosso suporte.';
                    } else {
                        resposta = 'Obrigado por sua mensagem. Como posso ajudar você hoje? Posso fornecer informações sobre agendamentos, consultas, exames ou ajudar com problemas técnicos.';
                    }                    
                    adicionarMensagem(resposta, 'bot');
                }, 1000);
            }
        }
        
        function adicionarMensagem(texto, tipo) {
            const mensagem = document.createElement('div');
            mensagem.className = `mensagem ${tipo}`;
            
            if (tipo === 'bot') {
                const avatar = document.createElement('div');
                avatar.className = 'avatar-bot';
                
                const avatarImg = document.createElement('img');
                avatarImg.src = '../image/assistente/assistente-estatico.png';
                avatarImg.alt = 'Assistente Digital';
                
                avatar.appendChild(avatarImg);
                mensagem.appendChild(avatar);
                
                // Animar o avatar brevemente
                setTimeout(function() {
                    avatarImg.src = '../image/assistente/assistente-falando.gif';
                    
                    setTimeout(function() {
                        avatarImg.src = '../image/assistente/assistente-estatico.png';
                    }, 2000);
                }, 100);
            }
            
            const textoMensagem = document.createElement('div');
            textoMensagem.className = 'texto-mensagem';
            textoMensagem.innerHTML = `<p>${texto}</p>`;
            mensagem.appendChild(textoMensagem);
            
            chatbotMensagens.appendChild(mensagem);
            chatbotMensagens.scrollTop = chatbotMensagens.scrollHeight;
        }
        
        opcoesBotoes.forEach(opcao => {
            opcao.addEventListener('click', function() {
                const texto = this.querySelector('p').textContent;
                adicionarMensagem(texto, 'bot');
            });
        });
    }
    
    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btnEnviar = this.querySelector('.btn-enviar');
            const textoOriginal = btnEnviar.textContent;
            
            btnEnviar.textContent = 'Enviando...';
            btnEnviar.disabled = true;
            
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                formContato.reset();
                btnEnviar.textContent = textoOriginal;
                btnEnviar.disabled = false;
            }, 1500);
        });
    }
    
    const ajudaBtn = document.querySelector('.ajuda');
    if (ajudaBtn) {
        ajudaBtn.addEventListener('click', function() {
            window.location.href = 'html/assistente.html';
        });
    }
});
