import Movie from "./Movie.js";
/*
SEARCH BUTTON => 
   Array of data => 
      Use to construct card OBJ
      Save them in our own Array
         => Used to display/redner in grid & empty message[opacity=0]

Click Search TAB => clear grid and empty-message[opacity=1]

Watchlist =>
   look in storage
   if empty: empty-message[opacity=1]
   else: GET array of Objects
      => display in grid & empty message[opacity=0]
*/

// API KEY .env?
const apiKey = "e77d9300";

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
			getMovieList(data.Search);
		} else {
			console.log("ERROR response too many results");
		}
	}

	searchInputEl.value = ""; //form.reset()
}

// :list[obj], Create new Object for each search result.
function getMovieList(searchList) {
	// GET details of each individual search
	const movieObjList = searchList.map(async (movie) => {
		const res = await fetch(
			`http://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`
		);
		const data = await res.json();
		return new Movie(data);
	});
	console.log(movieObjList);
	return movieObjList;
}

