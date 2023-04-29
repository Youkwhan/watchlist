class Movie {
	constructor(data) {
		Object.assign(this, data);
	}

	// :str, card HTML in string template
	getMovieCardHTML() {
		const { Poster, Title, imdbRating, Director, Year, Genre, Runtime, Plot } =
			this;
		return `
         <div class="card">
            <div class="card__poster">
               <img src=${Poster} alt="poster-image"/>
            </div>
            <div class="card__details">
               <div class="card__details__header">
                  <h2 class="card__details__header--title">${Title}</h2>
                  <div class="rating">
                     <i class="fa-solid fa-star" style="color: #f7da59"></i>
                     <span>${imdbRating}/10</span>
                  </div>
               </div>
               <div class="card__details__props">
                  <div class="card__details__props--group1">
                     <p class="card__details__props--director">${Director}</p>
                     <p class="card__details__props--year">${Year}</p>
                  </div>
                  <div class="card__details__props--group2">
                     <p>${Genre}</p>
                     <p>${Runtime}</p>
                  </div>
                  <div class="card__details__props--group3">
                     <button class="btn add-watchlist">
                        <i class="fa-solid fa-folder-plus"></i> Watchlist
                     </button>
                  </div>
               </div>
               <div class="card__details__plot">
                  <p>${Plot}</p>
               </div>
            </div>
         </div>
      `;
	}

   
}

export default Movie;
