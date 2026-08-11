
// Menu Mobile
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");


// Apri / Chiudi Menu

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
    const aperto = menu.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", aperto);

});


// Chiudi il menu dopo aver selezionato una voce
menuLinks.forEach((link) => {

    link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });

});


// Anno Dinamico
document.getElementById("anno").textContent = new Date().getFullYear();
