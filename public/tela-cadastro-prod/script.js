let foto = document.getElementById('imgFoto');
let inputFoto = document.getElementById('file');

foto.addEventListener('click', () => {
    inputFoto.click()
})

let enviarFormulario = document.getElementById('btn-submit');

enviarFormulario.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Seu formulário foi enviado!');
});
