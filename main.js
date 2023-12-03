document.addEventListener("DOMContentLoaded", function() {
    // Obtén el botón de scroll top
    var scrollTopButton = document.getElementById("scroll-top");

    // Agrega un evento de clic al botón
    scrollTopButton.addEventListener("click", function() {
        // Hace scroll hasta arriba de la página
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Desplazamiento suave
        });
    });
});
