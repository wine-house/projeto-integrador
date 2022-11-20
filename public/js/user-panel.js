// Compras do usuário
const userShoppingInfo = document.querySelector(".panel__user__text");
const userBarInner = document.querySelector(".panel__user__bar-inner");
const shoppingNumber = document.querySelectorAll(".panel__order__card").length;
let totalShopping = 10;

userShoppingInfo.innerHTML = `${shoppingNumber}/${totalShopping}`;
userBarInner.style.width = `${shoppingNumber * 10}%`;

// Modal
const modal = document.querySelector(".modal");
const userPurchase = document.getElementById("user-purchase");
const modalCloseBtn = document.querySelector(".modal__content__close");

setTimeout(() => modal.classList.add("show-modal"), 2000);
userPurchase.innerHTML = `${shoppingNumber}`;

modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("show-modal");
});

modal.addEventListener("click", (e) => {
    if(e.target !== modal) return;
    modal.classList.remove("show-modal");
});