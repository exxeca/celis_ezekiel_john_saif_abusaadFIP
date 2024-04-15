document.addEventListener("DOMContentLoaded", function() {
    var mirageEffect = document.querySelector(".mirage-effect");

    // Add event listener for mousemove event on the document
    document.addEventListener("mousemove", function(event) {
        // Update mirage effect position to follow mouse cursor
        mirageEffect.style.left = event.clientX + "px";
        mirageEffect.style.top = event.clientY + "px";
    });

    // Add event listener for mouseenter and mouseleave events on elements with the "mirage-hover" class
    var mirageHoverElements = document.querySelectorAll(".mirage-hover");
    mirageHoverElements.forEach(function(element) {
        element.addEventListener("mouseenter", function() {
            // Show mirage effect when mouse enters the element
            mirageEffect.style.display = "block";
        });
        element.addEventListener("mouseleave", function() {
            // Hide mirage effect when mouse leaves the element
            mirageEffect.style.display = "none";
        });
    });
});
