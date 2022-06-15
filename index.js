const ham = document.getElementById('ham')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (ham) {
    ham.addEventListener('click', ()=> {
         nav.classList.add('active');
    })
}


if (close) {
    close.addEventListener('click', ()=> {
         nav.classList.remove('active');
    })
}