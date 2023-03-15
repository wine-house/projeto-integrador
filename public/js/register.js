let registerForm = document.querySelector('.form-cadastro');
let registerInputs = document.querySelectorAll('.form-cadastro input');
let registerCheckboxes = document.querySelectorAll('.form-cadastro input[type="checkbox"]');
let registerCheckbox1 = document.getElementById('ciente');
let registerCheckbox2 = document.getElementById('maiorque18');

let state =false;

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    registerInputs.forEach(input => {
        if(input.type !='checkbox')
        if (input.value == '') {
            document.querySelector('.err-register-' + input.name).classList.remove('invisible');
        } else {
            document.querySelector('.err-register-' + input.name).classList.add('invisible');
            state = true;
        }
    });

    registerCheckboxes.forEach(input => {
        if(input.checked == false){
            document.querySelector('.err-register-' + input.name).classList.remove('invisible');
        }else{
            document.querySelector('.err-register-' + input.name).classList.add('invisible');
        }
    });

    if(state == true && registerCheckbox1.checked && registerCheckbox2.checked){
        registerForm.reset();
        document.querySelector('.mensagem-cadastro').style.display ='block';
        setTimeout(() => document.querySelector('.mensagem-cadastro').style.display ='none',4000);
    }
});