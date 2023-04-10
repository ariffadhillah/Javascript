// http://www.omdbapi.com/?apikey=9e96ad3b&s=harry potter

$.ajax({
    url: 'http://www.omdbapi.com/?apikey=9e96ad3b&s=avengers',
    success: results => {
        const movies = results.Search;
        console.log(movies)
        let cards ='';
        movies.forEach (m => {
            cards += showCard(m);
        });
        
        $('.movie-container').html(cards);

        // ketika tombol detail di-klik
        $('.modal-detail-button').on('click', function () {
            $.ajax({
                url: 'http://www.omdbapi.com/?apikey=9e96ad3b&i=' + $(this).data('imdbid'),
                success : m => {
                    const movieDetail = moviesDetails(m);
                  $('.modal-body').html(movieDetail)
                },
                error: (e) => {
                    console.log(e.responseText);
                }
            })
        });

    },
    error: (e) => {
        console.log(e.responseText);
    }
});

function showCard(m) {
    return ` <div class="col-md-4 my-5">
    <div class="card">
        <img src="${m.Poster}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${m.Title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
          <a href="#" class="btn btn-primary modal-detail-button"  data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Detail</a>
        </div>
      </div>
</div>`;
}

function moviesDetails(m) {
    return ` <div class="container-fliud">
    <div class="row">
        <div class="col-md-3">
            <img src="${m.Poster}" class="img-fluid" alt="">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item"><h4>${m.Title}</h4></li>
                <li class="list-group-item"><strong>Director : </strong></li>
                <li class="list-group-item"><strong>Actors :</strong></li>
                <li class="list-group-item"><strong>Writer : </strong></li>
                <li class="list-group-item"><strong>Plot : </strong><br></li>
              </ul>
        </div>
    </div>
  </div>`;
}