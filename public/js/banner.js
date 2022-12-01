const bannerContainer = document.querySelector(".banner");
const bannerItems = document.querySelectorAll(".banner__item");
const bannerImages = document.querySelectorAll(".banner__item img");
const bannerDescriptions = document.querySelectorAll(".banner__description");
const bannerNumbers = document.querySelectorAll(".banner__numbers");
const currentNumbers = document.querySelectorAll(".banner__current-number");
const totalNumbers = document.querySelectorAll(".banner__total-number");
const arrowButtons = document.querySelectorAll(".banner__buttons span");
let index = 0;

currentNumbers[0].innerHTML = `${index + 1}`;

totalNumbers.forEach((total) => total.innerHTML = totalNumbers.length);

bannerImages.forEach((image, idx) => {
    const description = image.getAttribute("alt");
    bannerDescriptions[idx].innerText = description;
});

bannerDescriptions[0].classList.add("moving-text");
setTimeout(() => bannerDescriptions[0].classList.remove("moving-text"), 1000);

bannerNumbers[0].classList.add("moving-text");
setTimeout(() => bannerNumbers[0].classList.remove("moving-text"), 1000);

const hideImages = () => {
    bannerItems.forEach((image) => {
        image.classList.remove("show-item");
    });
}

const checkCurrentNumber = () => {
    currentNumbers.forEach((number) => {
        number.innerHTML = `${index + 1}`;
    });
}

const checkIndex = () => {
    if(index < 0) index = bannerItems.length - 1;
    if(index > bannerItems.length - 1) index = 0;
}

const showImages = (idx) => {
    bannerItems[idx].classList.add("show-item");

    bannerContainer.classList.add("show-effect");
    setTimeout(() => bannerContainer.classList.remove("show-effect"), 700);

    bannerDescriptions[idx].classList.add("moving-text");
    setTimeout(() => bannerDescriptions[idx].classList.remove("moving-text"), 1000);

    bannerNumbers[idx].classList.add("moving-text");
    setTimeout(() => bannerNumbers[idx].classList.remove("moving-text"), 1000);
}

let intervalImages = setInterval(changeImages, 4500);

function changeImages() {
    hideImages();
    index++;
    checkIndex();
    showImages(index);
    checkCurrentNumber();
}

arrowButtons.forEach((button) => {
    button.addEventListener("click", () => {
        clearInterval(intervalImages);
        hideImages();

        if(button.classList.contains("banner__btn-right")) index++;
        if(button.classList.contains("banner__btn-left")) index--;

        checkIndex();
        showImages(index);
        checkCurrentNumber();

        intervalImages = setInterval(changeImages, 4500);
    });
});