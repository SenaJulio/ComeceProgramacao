function salvar(){
localStorage.setItem('nome','Pedro', 'Julio')
}
function ler() {
    let nome = localStorage.getItem('nome')
    console.log(nome);
}

function limpar(params) {
    localStorage.clear();
}