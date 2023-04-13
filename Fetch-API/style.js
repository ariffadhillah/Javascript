// fetch 

const SearchButton = document.querySelector('.search-button');
SearchButton.addEventListener('click', function() {
    const inputKeyword = document.querySelector('.input-keyword');
    
    fetch('http://www.omdbapi.com/?apikey=9e96ad3b&s=' + inputKeyword.value)
    .then(response => response.json())
    .then(response => {
        const movies = response.Search;
        let cards = '';
        movies.forEach(m => cards += showCard(m));
        const moviesContainer = document.querySelector('.movie-container');
        moviesContainer.innerHTML = cards;

        // ketika tombol detail di-klik
        const modalDetailButton = document.querySelectorAll('.modal-detail-button');
        modalDetailButton.forEach(btn => {
            btn.addEventListener('click', function() {
                const imdbid = this.dataset.imdbid;
                fetch('http://www.omdbapi.com/?apikey=9e96ad3b&i='+ imdbid)
                .then(response => response.json())
                .then(m => {
                    const movieDetail = showMoviesDetails(m);
                    const modalBody = document.querySelector('.modal-body');
                    modalBody.innerHTML = movieDetail;
                    
                });
            });
        });
    });

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

function showMoviesDetails(m) {
    return ` <div class="container-fliud">
    <div class="row">
        <div class="col-md-3">
            <img src="${m.Poster}" class="img-fluid" alt="">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item"><h4>${m.Title}</h4></li>
                <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
              </ul>
        </div>
    </div>
  </div>`;
}