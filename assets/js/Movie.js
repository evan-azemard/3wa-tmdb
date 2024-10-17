
export class Movie {
	constructor(movies) {
		this.movies = movies
		this.image_base_url = 'https://image.tmdb.org/t/p/w500';
	}


	displayMovies = () =>
	{

		contentSearch.innerHTML = '';

		if(this.movies.length === 0)
			{
				contentSearch.innerHTML = '<p>Aucun film trouvé.</p>';
				return;
			}
		this.movies.results.forEach(movie =>
		{

			console.log('log4 ',movie);
			const movieElement = document.createElement('div');

			movieElement.innerHTML = `
			<div class="card" style="width: 18rem;">
			  <img class="card-img-top" src="${this.image_base_url}${movie.poster_path}" alt="${movie.title}">
			  <div class="card-body">
			    <h5 class="card-title">${movie.title}</h5>
			    <p class="card-text">${movie.overview || 'Pas de description disponible.'}</p>
			    <a target="_blank" href="https://www.themoviedb.org//movie/${movie.id}-${movie.original_title}" class="btn btn-primary">Go somewhere</a>
              </div>
			</div>
          
        `;

			contentSearch.appendChild(movieElement)
		})
	}
}
