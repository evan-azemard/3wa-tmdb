export class MovieAPI {
    constructor(search) {
        this.search = search;
        this.apiKey = '8e972599262cd796df229b2586fad688';
        this.baseUrl = 'https://api.themoviedb.org/3/search/movie';
    }

      movieFetch = () => {
        return new Promise((resolve,reject) => {
            fetch(`${this.baseUrl}?api_key=${this.apiKey}&query=${this.search}&language=fr-FR&page=1&include_adult=false`)
                .then(response => response.json())
                .then(response => {
                    if (response.results) {
                        resolve(response);
                    } else {
                        reject('Aucun résultat trouvé');
                    }
                })
        }).catch(error => {
            reject(error);
        })
    }
}
