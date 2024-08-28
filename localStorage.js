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



function setTheme(theme) {
    localStorage.setItem('theme', theme);
    updateTheme();
}


function updateTheme() {
    let theme = localStorage.getItem('theme')
document.querySelector('#theme').innerHTML = 'Tema: '+ theme;

document.querySelector('body').classList.remove('light')
document.querySelector('body').classList.remove('dark')

if(theme === 'dark' ){
    document.querySelector('body').classList.add('dark');
   }else{
    document.querySelector('body').classList.add('light');
}
   }
updateTheme()

