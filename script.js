const menu = document.querySelector('.menu');
const btn = document.querySelector('.burguer');

btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

alert("Página diseñada para dispositivos de 13'' en delante. El formulario aún no se encuentra validado, cualquier contacto es por medio del telefono/correo adjunto en el CV.");
