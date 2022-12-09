const buttons = document.querySelectorAll('.carrino__botao');
const itemQuantity = document.querySelector('#quantidade-item');
const itemField = document.querySelector('#valor-item');
const itemValue = document.querySelector('#valor-item').innerText;
const totalValue = document.querySelector('#valor-total-itens');
let counter = 1;

let change = Number(itemValue.replace(',', '.'));

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('subtrai')) {
            counter--;

            if(counter < 0) counter = 0;
        }

        if(btn.classList.contains('adiciona')) counter++;

        let mult = change * counter;

        let totalField = mult.toFixed(2).toString().replace('.', ',');

        itemQuantity.innerText = counter;
        itemField.innerHTML = totalField;

        totalValue.innerHTML = totalField;
    });
});