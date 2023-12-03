document.addEventListener("DOMContentLoaded", function() {
    var scrollTopButton = document.getElementById("scroll-top");

    scrollTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
