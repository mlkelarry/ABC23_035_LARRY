// Custom JavaScript code for Warner Bros website

// Function to toggle a CSS class on click
function toggleClassOnClick(elementId, className) {
    var element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('click', function() {
            element.classList.toggle(className);
        });
    }
}

// Example usage of toggleClassOnClick function
// Add 'active' class to the navigation link when clicked
toggleClassOnClick('nav-link', 'active');

// Function to display a modal with movie details
function displayMovieModal(movieId) {
    var modal = document.getElementById('movie-modal');
    var movieDetails = getMovieDetails(movieId); // Fetch movie details from an API or database

    // Update modal content with movie details
    if (modal && movieDetails) {
        var titleElement = modal.querySelector('.modal-title');
        var bodyElement = modal.querySelector('.modal-body');

        titleElement.textContent = movieDetails.title;
        bodyElement.innerHTML = '<p><strong>Director:</strong> ' + movieDetails.director + '</p>' +
                                '<p><strong>Release Date:</strong> ' + movieDetails.releaseDate + '</p>' +
                                '<p><strong>Description:</strong> ' + movieDetails.description + '</p>';

        // Display the modal
        $(modal).modal('show');
    }
}

// Example usage of displayMovieModal function
// Open movie modal when a movie card is clicked
var movieCards = document.querySelectorAll('.movie-card');
if (movieCards) {
    movieCards.forEach(function(card) {
        card.addEventListener('click', function() {
            var movieId = card.dataset.movieId;
            displayMovieModal(movieId);
        });
    });
}

// Function to fetch movie details from an API or database
function getMovieDetails(movieId) {
    // This is just a placeholder function, in a real application you would fetch movie details from a server
    // For example, you could use AJAX or fetch API to make a request to your server and retrieve movie details based on the movieId
    // For simplicity, we'll just return some mock data here

    // Mock movie details
    var mockMovieData = {
        1: {
            title: 'The Dark Knight',
            director: 'Christopher Nolan',
            releaseDate: 'July 18, 2008',
            description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
        },
        2: {
            title: 'Inception',
            director: 'Christopher Nolan',
            releaseDate: 'July 16, 2010',
            description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
        },
        // Add more movie details as needed
    };

    // Return movie details based on movieId
    return mockMovieData[movieId];
}
