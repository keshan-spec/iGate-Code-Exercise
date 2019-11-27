// loader
const DOM = document.body;
window.addEventListener("load", () => {
    // Animate loader off screen
    var loader = document.querySelector(".loader");
    // loader.setAttribute("data-aos", "fade-up");
    DOM.removeChild(document.querySelector(".loader"));
});