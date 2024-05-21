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

// Function to display a modal with movie or game details
function displayDetailsModal(itemType, itemId) {
    var modal = document.getElementById('details-modal');
    var itemDetails = getItemDetails(itemType, itemId); // Fetch item details from an API or database

    // Update modal content with item details
    if (modal && itemDetails) {
        var titleElement = modal.querySelector('.modal-title');
        var bodyElement = modal.querySelector('.modal-body');

        titleElement.textContent = itemDetails.title;
        bodyElement.innerHTML = '<p><strong>Category:</strong> ' + itemDetails.category + '</p>' +
                                '<p><strong>Description:</strong> ' + itemDetails.description + '</p>';

        // Display the modal
        $(modal).modal('show');
    }
}

// Example usage of displayDetailsModal function
// Open modal when a movie or game card is clicked
var itemCards = document.querySelectorAll('.movie-card, .game-card');
if (itemCards) {
    itemCards.forEach(function(card) {
        card.addEventListener('click', function() {
            var itemType = card.classList.contains('movie-card') ? 'movie' : 'game';
            var itemId = card.dataset.itemId;
            displayDetailsModal(itemType, itemId);
        });
    });
}

// Function to fetch item details from an API or database
function getItemDetails(itemType, itemId) {
    // This is just a placeholder function, in a real application you would fetch item details from a server
    // For example, you could use AJAX or fetch API to make a request to your server and retrieve item details based on the itemType and itemId
    // For simplicity, we'll just return some mock data here

    if (itemType === 'movie') {
        // Mock movie details
        var mockMovieData = {
            1: {
                title: 'The Dark Knight',
                category: 'Movie',
                description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
            },
            2: {
                title: 'Inception',
                category: 'Movie',
                description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
            },
            // Add more movie details as needed
        };

        // Return movie details based on itemId
        return mockMovieData[itemId];
    } else if (itemType === 'game') {
        // Mock game details
        var mockGameData = {
            1: {
                title: 'Game 1',
                category: 'Game',
                description: 'Description of Game 1.'
            },
            // Add more game details as needed
        };

        // Return game details based on itemId
        return mockGameData[itemId];
    }
}
