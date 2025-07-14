function mostrarMensaje() {
    const mensaje = document.getElementById('mensaje-sorpresa');
    mensaje.style.display = 'block';
}

function crearCorazon() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '♥';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(crearCorazon, 300);

let fotos = ['imagenes/foto-cumple.jpg', 'imagenes/foto-parque.jpg', 'imagenes/foto-noche.jpg'];
let indice = 0;
function cambiarFoto() {
    const img = document.querySelector('.foto');
    img.src = fotos[indice];
    indice = (indice + 1) % fotos.length;
}

function crearConfeti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.background = `hsl(${Math.random() * 360}, 80%, 50%)`;
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
}

setInterval(crearConfeti, 200);