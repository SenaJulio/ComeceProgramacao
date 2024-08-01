function clicou() {
    let botao = document.querySelector('.cta')
    if (botao.classList.contains("secondary-color") === true) {
       
        botao.classList.add ='verde'
    }
   
}
let botao = document.querySelector('.botao');
botao.addEventListener('click', clicou)