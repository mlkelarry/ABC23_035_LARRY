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

setInterval(updateHeroImage, 5000);
updateHeroImage();

