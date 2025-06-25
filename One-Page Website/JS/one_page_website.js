document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputs = form.querySelectorAll('input[type="text"]');
        const name = inputs[0].value.trim();
        const favoriteCar = inputs[1].value.trim();
        const email = inputs[2].value.trim();
        const reason = form.querySelector('textarea').value.trim();

        if (!name || !favoriteCar || !email || !reason) {
            alert("Please complete all fields before submitting.");
            return;
        }

        alert(`Thanks, ${name}!\nYou love the ${favoriteCar} because "${reason}".\nWe'll follow up at ${email}.`);
        form.reset();
    });

    // Clear buttons
    const clearButtons = document.querySelectorAll('.clear-btn');
    clearButtons.forEach(button => {
        button.addEventListener('click', function () {
            const input = this.previousElementSibling;
            input.value = '';
            input.focus();
            this.style.display = 'none';
        });
    });
    // Lightbox functionality
    const lightboxLinks = document.querySelectorAll('.lightbox-trigger');

    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.id = 'lightbox-overlay';
    document.body.appendChild(lightboxOverlay);

    const lightboxImage = document.createElement('img');
    lightboxOverlay.appendChild(lightboxImage);

    // Show lightbox when image is clicked
    lightboxLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const imageSrc = this.getAttribute('href');
        lightboxImage.src = imageSrc;
        lightboxOverlay.style.display = 'flex';
    });
    });

    // Close lightbox on click
    lightboxOverlay.addEventListener('click', function () {
    lightboxOverlay.style.display = 'none';
    });

    // Smooth scroll for nav
    const navLinks = document.querySelectorAll("ul a[href^='#']");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 10,
                    behavior: "smooth"
                });
            }
        });
    });
});
