//Banner2
const banner2Container = document.querySelector(".banner2");
const banner2Images = document.querySelectorAll(".banner2__image");
const banner2Bullets = document.querySelectorAll(".banner2__bullets figure");
const banner2Text = document.querySelector(".banner2__text");
const arrayText = ['Trabalhamos em parceria com diversas vinícolas', 'Disponibilizamos vinhos Tinto, Seco, Rose e Espumante', 'Sorteio mensal para participar de eventos gratuitamente', 'Oferecemos diariamente descontos em nossos vinhos', 'Cadastre-se em nosso site e concorra a vários prêmios', 'Ganhe um brinde em sua primeira compra', 'A partir de 10 compras, ganhe um kit de vinhos', 'Sempre disponibilizamos vinhos de ótima qualidade'];
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

setInterval(changeText, 3500);

function changeText() {    
    counter++;

    if(counter % 2 == 0) {
        banner2Text.classList.add("active-text");
        setTimeout(() => banner2Text.classList.remove("active-text"), 1000);
        banner2Text.style.borderRadius = "20px 5px 20px 5px";
    }
    else {
        banner2Text.classList.add("active-text2");
        setTimeout(() => banner2Text.classList.remove("active-text2"), 1000);
        banner2Text.style.borderRadius = "5px 20px 5px 20px";
    }    

    if(counter > arrayText.length - 1) counter = 0;
    banner2Text.innerText = arrayText[counter];
}

//Sorteios
const prizeBtns = document.querySelectorAll(".prize__bio__btn");
const likeBtns = document.querySelectorAll(".like-icon");
const likeNumber1 = document.getElementById("count-likes-1");
const likeNumber2 = document.getElementById("count-likes-2");

let totalClicked1 = +(likeNumber1.getAttribute("value"));
let totalClicked2 = +(likeNumber2.getAttribute("value"));

likeNumber1.innerText = totalClicked1;
likeNumber2.innerText = totalClicked2;

prizeBtns.forEach(button => {
    button.addEventListener("click", (e) => {
        const prizeContainer = e.currentTarget.parentElement.parentElement;
        prizeContainer.classList.toggle("select-container");
    });
});

likeBtns.forEach((btn) => {
    let clicked = false;

    btn.addEventListener("click", () => {
        if(btn.classList.contains("like-1")) {
            if(!clicked) {
                btn.classList.add("green-color");
                clicked = true;
                totalClicked1 = totalClicked1 + 1;
            }
            else {
                btn.classList.remove("green-color");
                clicked = false;
                totalClicked1 = totalClicked1 - 1;
            }

            likeNumber1.innerText = totalClicked1;
        }

        if(btn.classList.contains("like-2")) {
            if(!clicked) {
                btn.classList.add("green-color");
                clicked = true;
                totalClicked2 = totalClicked2 + 1;
            }
            else {
                btn.classList.remove("green-color");
                clicked = false;
                totalClicked2 = totalClicked2 - 1;
            }

            likeNumber2.innerText = totalClicked2;
        }
    });
});

// likeBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         btn.classList.toggle("green-color");
//     });
// });