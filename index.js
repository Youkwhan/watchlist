import { renderMovieCards } from "./utils";
/*
Watchlist =>
   look in storage
   if empty: empty-message[opacity=1]
   else: GET array of Objects
      => display in grid & empty message[opacity=0]
*/

const emptyMessageEl = document.getElementById("empty-message");
const watchlistGridContainerEl = document.getElementById(
	"watchlist-grid-container"
);
