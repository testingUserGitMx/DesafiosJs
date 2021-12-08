/* 
f39585b96eb4b491aef7e6ca5d7a6363
api_key=f39585b96eb4b491aef7e6ca5d7a6363
https://api.themoviedb.org/3/genre/movie/list?
*/


const main = document.querySelector('.main')



let api_key = 'f39585b96eb4b491aef7e6ca5d7a6363'
let api_genres_list = 'https://api.themoviedb.org/3/genre/movie/list?api_key=f39585b96eb4b491aef7e6ca5d7a6363'
let api_movie_genres = 'https://api.themoviedb.org/3/discover/movie?'
let api_img_url = 'https://image.tmdb.org/t/p/w500'
let api_movies_populars = 'https://api.themoviedb.org/3/movie/popular?'


const jQueryData = () => {
    $.get(api_genres_list, (respuesta, estado) => {
        if (estado === "success") {
         console.log(respuesta)   
        
        
            respuesta.genres.forEach(item => {
                fetchMoviesListByGenres(item.id, item.name);
            })
        }
    })
}

const fetchMoviesListByGenres = (id, genres) => {
    fetch(api_movie_genres + new URLSearchParams({
        api_key: api_key,
        with_genres: id,
        page: Math.floor(Math.random() * 3) + 1
    }))
    .then(res => res.json())
    .then(data => {
        console.log(data)
        makeCategoryElement(`${genres}_movies`, data.results)
    })
    .catch(error => console.log(error))
}

const makeCategoryElement = (category, data) => {
    main.innerHTML += `
    <div class="movie-list">
            <button class="pre-btn"><img src="img/pre.png" alt=""></button>
            <h1 class="movie-category">${category.split("_").join(" ")}</h1>
            <div class="movie-container" id="${category}">
                
            </div>
            <button class="nxt-btn"><img src="img/nxt.png" alt=""></button>
        </div>
    `;
    makeCards(category, data);
}


const makeCards = (id, data) => {
    const movieContainer = document.getElementById(id);
    
    data.forEach((item, i) => {
        if(item.backdrop_path == null){
            item.backdrop_path = item.poster_path;
            if (item.backdrop_path == null) {
                return;
            }
        }
        movieContainer.innerHTML += `
        <div class="movie">
                    <img src="${api_img_url}${item.backdrop_path}" alt="">
                    <p class="movie-title">${item.title}</p>
        </div>
        `;
    })
}



jQueryData()