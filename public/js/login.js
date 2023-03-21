const bcrypt = require('bcrypt')

let loginForm = document.querySelector('.login');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let fieldEmail = document.getElementById('email');
    if (fieldEmail.value == '') {
        document.querySelector('.err-login-email').classList.remove('invisible')
    } 
    // else {
    //     document.querySelector('.err-login-email').classList.add('invisible')
    // };

    let fieldSenha = document.getElementById('password');
    fieldSenha = bcrypt.hashSync(fieldSenha, 10)

    if (fieldSenha.value.length < 6) {            
        document.querySelector('.err-login-password').classList.remove('invisible')
    } 
    // else {
    //     document.querySelector('.err-login-password').classList.add('invisible')
    // }
    if(fieldEmail.value !== '' && fieldSenha.value.length >= 6) loginForm.reset();
});




   
   

   







