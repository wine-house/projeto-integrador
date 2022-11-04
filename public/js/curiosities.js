const curiosityItems = document.querySelectorAll(".curiosity-item");
const frontItems = document.querySelectorAll(".curiosity-item__front");
const checkButtons = document.querySelectorAll(".curiosity-item__check");
const backItems = document.querySelectorAll(".curiosity-item__back");
const backImages = document.querySelectorAll(".curiosity-item__back__img");
const closeButtons = document.querySelectorAll(".curiosity-item__close");

// event listeners
checkButtons.forEach((button, idx) => {
    button.addEventListener("click", () => {
        curiosityItems[idx].classList.add("change");
        frontItems[idx].classList.add("change");
        backItems[idx].classList.add("change");
        backImages[idx].classList.add("change");
    });
});

closeButtons.forEach((button, idx) => {
    button.addEventListener("click", () => {
        curiosityItems[idx].classList.remove("change");
        frontItems[idx].classList.remove("change");
        backItems[idx].classList.remove("change");
        backImages[idx].classList.remove("change");
    });
});