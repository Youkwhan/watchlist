import Movie from "./Movie.js";
import { renderMovieCards } from "./utils.js";

const emptyMessageEl = document.getElementById("empty-message");
const watchlistGridContainerEl = document.getElementById(
	"watchlist-grid-container"
);
const movieObjList = [];

render();

function render() {
	if (localStorage.length != 0) {
		// remove empty msg
		emptyMessageEl.style.opacity = 0;

		// get data
		getLocalStorage();
		renderMovieCards(movieObjList, watchlistGridContainerEl);
		removeFromWatchlist();
	}
}

function getLocalStorage() {
	if (localStorage.length != 0) {
		// not empty
		for (let i = 0; i < localStorage.length; i++) {
			const data = JSON.parse(localStorage.getItem(localStorage.key(i)));
			const movie = new Movie(data);
			movie.added = true;
			movieObjList.push(movie);
		}
	}
}

/* 
if button pressed to remove
   remove fromlocal storage 
   render()
   
   */
function removeFromWatchlist() {
	document.addEventListener("click", (e) => {
		if (e.target.dataset.id) {
			const movieObj = movieObjList.filter((movie) => {
				return e.target.dataset.id === movie.imdbID;
			})[0];

			if (localStorage.getItem(movieObj.imdbID)) {
				console.log(`${movieObj.Title} is removed`);
				localStorage.removeItem(movieObj.imdbID);
				// render();
				const closestCardEl = e.target.closest(".card");
				closestCardEl.remove();

				if (localStorage.length === 0) {
					// when remove last item in wathclist, rerender
					emptyMessageEl.style.opacity = 1;
				}
			}
		}
	});
}
