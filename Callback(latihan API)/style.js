// http://www.omdbapi.com/?apikey=9e96ad3b&s=harry potter

$.ajax({
    url: 'http://www.omdbapi.com/?apikey=9e96ad3b&s=avengers',
    success: results => {
        const movies = results.Search;
        let cards ='';
        movies.forEach (m => {
            cards += ` <div class="col-md-4 my-5">
            <div class="card">
                <img src="" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">Avengers</h5>
                  <h6 class="card-subtitle mb-2 text-muted">2016</h6>
                  <a href="#" class="btn btn-primary">Show Detail</a>
                </div>
              </div>
        </div>`;
        });
        $('.movie-container').html(cards);
    },
    error: (e) => {
        console.log(e.responseText);
    }
});