import Movie from "./Movie.js";
import { renderMovieCards } from "./utils.js";

// API KEY .env?
const apiKey = "e77d9300";
const emptyMessageEl = document.getElementById("empty-message");
const searchGridContainerEl = document.getElementById("search-grid-container");
let movieObjList = [];

document.getElementById("search-btn").addEventListener("click", getSearchBar);

// :void, GET search result from API call,
async function getSearchBar(e) {
	e.preventDefault();
	const searchInputEl = document.getElementById("search-area");
	if (searchInputEl.value) {
		const res = await fetch(
			`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchInputEl.value}`
		);
		const data = await res.json();
		//console.log(data); {Search: Array(5), totalResults: '5', Response: 'True'}

		if (data.Response === "True") {
			emptyMessageEl.style.opacity = 0;
			// Let the promise resolve first before rendering
			movieObjList = await getMovieList(data.Search);
			renderMovieCards(movieObjList, searchGridContainerEl);
			// listen for button after rendering
			addToWatchlist();
		} else {
			console.log("ERROR response too many results");
			emptyMessageEl.innerHTML = `
				<i class="fa-solid fa-face-dizzy fa-2xl"></i>
				<div class="spacing"></div>
				<h3>Too Many Results <span style="display:block">Please try Another Search</span></h3>
			`;
		}
	}

	searchInputEl.value = ""; //form.reset()
}

// :list[obj], Create new Object for each search result.
async function getMovieList(searchList) {
	// GET details of each individual search
	const movieObjList = await Promise.all(
		searchList.map(async (movie) => {
			const res = await fetch(
				`https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`
			);
			const data = await res.json();
			return new Movie(data);
		})
	);
	return movieObjList;
}

// listens for watchlist button, adds the corresponding movie to the database/storage for now
function addToWatchlist() {
	document.removeEventListener("click", handleWatchlistClick);
	document.addEventListener("click", handleWatchlistClick);
}

function handleWatchlistClick(e){
	// if it has a data attribute (a button)
	if (e.target.dataset.id) {
		const movieObj = movieObjList.filter((movie) => {
			return e.target.dataset.id === movie.imdbID;
		})[0];

		let sign = "";

		if (e.target.id === "add") {
			// send to local storage
			if (localStorage.getItem(movieObj.imdbID)) {
				console.log(`${movieObj.Title} Already in watchlist`);
			} else {
				localStorage.setItem(`${movieObj.imdbID}`, JSON.stringify(movieObj));
				console.log(`${movieObj.Title} is added to watchlist`);
			}
			sign = "add";
		}

		if (e.target.id === "remove") {
			// remove from local storage
			localStorage.removeItem(`${movieObj.imdbID}`);
			console.log(`${movieObj.Title} has been removed`);
			sign = "remove";
		}

		handleButtonChange(sign, e);
	}
}
function handleButtonChange(prop, e) {
	if (prop === "add") {
		e.target.setAttribute("id", "remove");
		e.target.innerHTML = `<i class="fa-solid fa-circle-minus"></i> Remove`;
	}
	if (prop === "remove") {
		e.target.setAttribute("id", "add");
		e.target.innerHTML = `<i class="fa-solid fa-folder-plus"></i> Watchlist`;
	}
}
