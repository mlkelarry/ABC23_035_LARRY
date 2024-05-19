// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header functionality
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Hero section image carousel
const carouselImages = [
    'images/movies.jpg',
    'images/tv-shows.jpg',
    'images/games.jpg',
    'images/merchandise.jpg',
    'images/news.jpg'
];

let currentIndex = 0;
const heroSection = document.querySelector('#hero');
const heroImage = document.createElement('div');
heroImage.classList.add('hero-image');
heroSection.appendChild(heroImage);

function updateHeroImage() {
    heroImage.style.backgroundImage = `url(${carouselImages[currentIndex]})`;
    currentIndex = (currentIndex + 1) % carouselImages.length;
} 
// Global variables and functions

// Function to initialize the website
function initializeWebsite() {
    // Code to initialize website components
}

// Function to handle user interactions on the homepage
function handleHomepageInteractions() {
    // Code to handle rotating banners and featured content recommendations
}

// Function to handle movie page interactions
function handleMoviePageInteractions() {
    // Code to handle interactions on the movie details page
}

// Function to handle TV shows page interactions
function handleTVShowsPageInteractions() {
    // Code to handle interactions on the TV shows page
}

// Function to handle games & apps page interactions
function handleGamesPageInteractions() {
    // Code to handle interactions on the games & apps page
}

// Function to handle news & behind-the-scenes page interactions
function handleNewsPageInteractions() {
    // Code to handle interactions on the news & behind-the-scenes page
}

// Function to handle merchandise page interactions
function handleMerchandisePageInteractions() {
    // Code to handle interactions on the merchandise page
}

// Function to handle AI chatbot interactions
function handleChatbotInteractions() {
    // Code to handle interactions with the AI chatbot
}

// Event listeners
document.addEventListener('DOMContentLoaded', initializeWebsite);
document.addEventListener('DOMContentLoaded', handleHomepageInteractions);
document.addEventListener('DOMContentLoaded', handleMoviePageInteractions);
document.addEventListener('DOMContentLoaded', handleTVShowsPageInteractions);
document.addEventListener('DOMContentLoaded', handleGamesPageInteractions);
document.addEventListener('DOMContentLoaded', handleNewsPageInteractions);
document.addEventListener('DOMContentLoaded', handleMerchandisePageInteractions);
document.addEventListener('DOMContentLoaded', handleChatbotInteractions);
+

setInterval(updateHeroImage, 5000);
updateHeroImage();

