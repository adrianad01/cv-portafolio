const menu = document.querySelector('.menu');
const btn = document.querySelector('.burguer');

btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

alert("Página diseñada para dispositivos de 13'' en delante")