function openMovieDetails(movieId) {
    var movieDetails = {
        'movie1': {
            title: 'Movie Title 1',
            summary: 'This is the summary of Movie 1...',
            cast: 'Actor 1, Actress 1',
            releaseDate: '2023'
        },
        'movie2': {
            title: 'Movie Title 2',
            summary: 'This is the summary of Movie 2...',
            cast: 'Actor 2, Actress 2',
            releaseDate: '2022'
        },
        // Add more movies here
    };

    var movieInfo = movieDetails[movieId];
    var detailsPage = window.open('movie-details.html');

    detailsPage.onload = function() {
        detailsPage.document.title = movieInfo.title; // Update title
        detailsPage.document.getElementById('summary').textContent = movieInfo.summary;
        detailsPage.document.getElementById('cast').textContent = movieInfo.cast;
        detailsPage.document.getElementById('releaseDate').textContent = movieInfo.releaseDate;
        // Add more fields as needed
    };
}
