// http://www.omdbapi.com/?apikey=9e96ad3b&s=harry potter

$.ajax({
    url: 'http://www.omdbapi.com/?apikey=9e96ad3b&s=avengers',
    success: results => {
        console.log(results);
    }
});