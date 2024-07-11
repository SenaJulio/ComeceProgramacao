// JavaScript para adicionar funcionalidades adicionais, se necessário
document.addEventListener('DOMContentLoaded', function() {
    // Exemplo: Mostrar um alerta ao adicionar um item ao carrinho
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produto adicionado ao carrinho!');
        });
    });
});

