import Movie from "./Movie.js";
import { renderMovieCards } from "./utils.js";

// API KEY .env?
const apiKey = "e77d9300";
const emptyMessageEl = document.getElementById("empty-message");
const searchGridContainerEl = document.getElementById("search-grid-container");

document.getElementById("search-btn").addEventListener("click", getSearchBar);

// :void, GET search result from API call,
async function getSearchBar(e) {
	e.preventDefault();
	const searchInputEl = document.getElementById("search-area");
	if (searchInputEl.value) {
		const res = await fetch(
			`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInputEl.value}`
		);
		const data = await res.json();
		console.log(data); //{Search: Array(5), totalResults: '5', Response: 'True'}

		if (data.Response === "True") {
			emptyMessageEl.style.opacity = 0;
			// Let the promise resolve first before rendering
			const movieObjList = await getMovieList(data.Search);
			renderMovieCards(movieObjList, searchGridContainerEl);
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
				`http://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`
			);
			const data = await res.json();
			return new Movie(data);
		})
	);
	return movieObjList;
}
