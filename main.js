// JavaScript for interactive elements can be added here

document.addEventListener("DOMContentLoaded", function() {
    // Example: Add an event listener to the contact form
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
    });
});
