// :void, Renders the cards onto the HTML
function renderMovieCards(movieObjList, gridContainerEl) {
	console.log(movieObjList);
	const movieStrList = movieObjList
		.map((movie) => {
			console.log(movie.Title);
			return movie.getMovieCardHTML();
		})
		.join("");
	gridContainerEl.innerHTML = movieStrList;
}

export { renderMovieCards };
