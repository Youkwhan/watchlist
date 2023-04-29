// :void, Renders the cards onto the HTML
function renderMovieCards(movieObjList, gridContainerEl) {
	const movieStrList = movieObjList
		.map((movie) => {
			return movie.getMovieCardHTML();
		})
		.join("");
	gridContainerEl.innerHTML = movieStrList;
}

export { renderMovieCards };
