const menu = document.querySelectorAll('.menu a');
const secoes = document.querySelectorAll('.apresentacao');

menu[0].classList.add('ativo');
secoes[0].classList.add('ativo');


function ativaSecao(event) {
    menu.forEach((item, index) => {
        if(item.classList.contains('ativo')){
            item.classList.remove('ativo');
            secoes[index].classList.remove('ativo');
        }
    });
    event.currentTarget.classList.add('ativo');
    menu.forEach((item, index) => {
        if(item.classList.contains('ativo')){
            secoes[index].classList.add('ativo');
        }
    });
}

menu.forEach((item) => {
    item.addEventListener('click', ativaSecao)
});

