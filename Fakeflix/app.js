const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const homeBtn = document.getElementById('homeBtn');
const shopBtn = document.getElementById('shopBtn');

let api_key = "api_key=f39585b96eb4b491aef7e6ca5d7a6363"
let api_key2 = "https://api.themoviedb.org/3/movie/popular?api_key=f39585b96eb4b491aef7e6ca5d7a6363&language=es-MX&page="
let api_img_url = 'https://image.tmdb.org/t/p/original'



let pagina = 1;


btnSiguiente.addEventListener('click', () => {
    if (pagina < 1000) {
        pagina += 1
        jqueryData()
    }
})

btnAnterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina -= 1
        jqueryData()
    }
})


const jqueryData = () => {
    $.get(`${api_key2}${pagina}`, (respuesta, estado) => {
        if (estado === "success") {
            console.log(respuesta.results)
            
            let movies = '';

            respuesta.results.forEach(movie => {
                console.log(movie.title)
                movies += `
                <div class="col-md-3 mt-4 card-movie text-center text-white">
                    <img class="img-fluid rounded" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
                    <p class="">${movie.title}</p>
                </div>    
                `;
            })
            document.getElementById('contenedor').innerHTML = movies;
        }
    })
}

const fetchBanner = () => {
    fetch(api_key2)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        makeBanner(data)
    })
    .catch(error => {
        console.log(error)
    })
}


const makeBanner = (data) => {
    
    const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
    console.log(setMovie);
    var banner = document.getElementById("banner");
    
    
    var banner_title = document.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description");
    banner.style.backgroundImage = "url(" + api_img_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = setMovie.overview,
    banner_title.innerText = setMovie.title;
}



document.addEventListener("DOMContentLoaded", () => {
    jqueryData();
    fetchBanner()
})