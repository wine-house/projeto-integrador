
let loginForm = document.querySelector('.login');

loginForm.addEventListener('submit', function (event) {


    let fieldEmail = document.getElementById('email-login');
    if (fieldEmail.value == '') {
        event.preventDefault();
        document.querySelector('.err-login-email').classList.remove('invisible')
    } else {
        document.querySelector('.err-login-email').classList.add('invisible')
    }

    let fieldSenha = document.getElementById('password');
    if (fieldSenha.value.length < 6) {
        event.preventDefault();
        document.querySelector('.err-login-password').classList.remove('invisible')
    } else {
        document.querySelector('.err-login-password').classList.add('invisible')
    }

});

let registerForm = document.querySelector('.form-cadastro');
let registerInputs = document.querySelectorAll('.form-cadastro input')
registerForm.addEventListener('submit', function (event) {

    registerInputs.forEach(input => {

        if (input.value == '') {
            event.preventDefault();
            document.querySelector('.err-register-' + input.name).classList.remove('invisible')
        } else {
            document.querySelector('.err-register-' + input.name).classList.add('invisible')
        }
    })


})






