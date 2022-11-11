// Search Field
const body = document.querySelector("body");
const inputText = document.getElementById("text");
const searchGlass = document.querySelector(".search__glass");

body.addEventListener("click", (e) => {
    if(e.target == inputText) {
        inputText.classList.add("expand");
        searchGlass.style.right = "-26px";
    }
    else {
        inputText.classList.remove("expand");
        searchGlass.style.right = "2px";
    }
});

// Hamburger Menu
const header = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger");

hamburgerMenu.addEventListener("click", () => {;
    header.classList.toggle("open-menu");
});

// Link to Top
const linkTop = document.querySelector('.link-top');

window.addEventListener("scroll", () => {
    const heightScroll = window.scrollY;
    
    if(heightScroll >= 300) linkTop.classList.add("show-link");
    else linkTop.classList.remove("show-link");
});