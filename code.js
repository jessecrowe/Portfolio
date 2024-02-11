function toggleBurger() {
    const menu = document.querySelector(".burger-links");
    const burgerIcon = document.querySelector(".burger-image");
    menu.classList.toggle("open")
    burgerIcon.classList.toggle("open")
}