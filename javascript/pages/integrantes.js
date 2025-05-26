document.addEventListener('DOMContentLoaded', function() {
    // Cria placeholders para fotos não encontradas
    const fotos = document.querySelectorAll('.integrante-foto img');
    fotos.forEach(img => {
        img.addEventListener('error', function() {
            const nome = this.alt;
            const iniciais = nome.split(' ').map(n => n[0]).join('');
            this.src = `https://via.placeholder.com/150/dbeec2/005e91?text=${iniciais}`;
        });
    });
    
    // Adiciona efeito de hover nos cards
    const cards = document.querySelectorAll('.integrante-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });
});
