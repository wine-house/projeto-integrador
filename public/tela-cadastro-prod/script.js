let foto = document.getElementById('imgFoto');
let inputFoto = document.getElementById('file');

foto.addEventListener('click', () => {
    inputFoto.click()
})

inputFoto.addEventListener('change', (e) => {
    e.preventDefault();
    console.log(e);
    let reader = new FileReader();

    reader.onload = () => {
        foto.src = reader.result;
    }

    reader.readAsDataURL(inputFoto.files[0]);
})

let enviarFormulario = document.getElementById('btn-submit');

enviarFormulario.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Seu formulário foi enviado!');
});

