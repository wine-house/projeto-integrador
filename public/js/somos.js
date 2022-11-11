//Banner2
const banner2Container = document.querySelector(".banner2");
const banner2Images = document.querySelectorAll(".banner2__image");
const banner2Bullets = document.querySelectorAll(".banner2__bullets figure");
const banner2Text = document.querySelector(".banner2__text");
const arrayText = ['Trabalhamos em parceria com diversas vinícolas', 'Disponibilizamos vinhos Tinto, Seco, Rose e Espumante', 'Sorteio mensal para participar de eventos gratuitamente', 'Oferecemos diariamente descontos em nossos vinhos', 'Cadastre-se em nosso site e concorra a vários prêmios', 'Ganhe um brinde em sua primeira compra', 'A cada 10 compras, ganhe um kit de vinhos', 'Sempre disponibilizamos vinhos de ótima qualidade'];
let counter = 0;

banner2Text.innerText = arrayText[0];
banner2Text.classList.add("change-opacity");
setTimeout(() => banner2Text.classList.remove("change-opacity"), 1000);

const removeImages = () => {
    banner2Images.forEach((image) => image.classList.remove("show2-item"));
}

const removeBullets = () => {
    banner2Bullets.forEach((bullet) => bullet.classList.remove("show2-item"));
}

banner2Bullets.forEach((bullet, idx) => {
    bullet.addEventListener('click', () => {
        removeImages();
        banner2Images[idx].classList.add("show2-item");

        removeBullets();
        bullet.classList.add("show2-item");

        banner2Container.classList.add("show-effect");
        setTimeout(() => banner2Container.classList.remove("show-effect"), 700);
    });
});

setInterval(changeText, 3700);

function changeText() {    
    counter++;

    if(counter % 2 == 0) {
        banner2Text.classList.add("active-text");
        setTimeout(() => banner2Text.classList.remove("active-text"), 1000);
    }
    else {
        banner2Text.classList.add("active-text2");
        setTimeout(() => banner2Text.classList.remove("active-text2"), 1000);
    }    

    if(counter > arrayText.length - 1) counter = 0;
    banner2Text.innerText = arrayText[counter];
}

//Destaques
const contactMeBtn = document.querySelectorAll(".emphasis__bio__btn");

contactMeBtn.forEach(button => {
    button.addEventListener("click", (e) => {
        const changeManager = e.currentTarget.parentElement.parentElement;
        changeManager.classList.toggle("change-manager");
    });
});