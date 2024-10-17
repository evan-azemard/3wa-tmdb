
import { MovieAPI } from './MovieAPI.js';
import { Movie } from "./Movie.js";

const contentSearch = document.querySelector('#contentSearch');
const buttonSearch = document.querySelector("button");
const formSearch = document.querySelector('#search');

buttonSearch.addEventListener('click',() => {
	const searchQuery = formSearch.value.trim();
	if(searchQuery !== ""){
		const movieAPI = new MovieAPI(searchQuery);

		movieAPI.movieFetch()
			.then(results => {
				const movie = new Movie(results);
				movie.displayMovies();
			})
			.catch(error => {
				console.log(error);
			})
	}
})