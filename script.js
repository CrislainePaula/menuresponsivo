const botaoMobile = document.getElementById('botao-mobile');

function aparecemenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

botaoMobile.addEventListener('click', aparecemenu);