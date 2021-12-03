const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const homeBtn = document.getElementById('homeBtn');
const shopBtn = document.getElementById('shopBtn');


let api_key2 = "https://api.themoviedb.org/3/movie/popular?api_key=f39585b96eb4b491aef7e6ca5d7a6363&language=es-MX&page="

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
                <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
                    <h3 class="titulo">${movie.title}</h3>
                </div>    
                `;
            })
            document.getElementById('contenedor').innerHTML = movies;
        }
    })
 }



 document.addEventListener("DOMContentLoaded", () => {
    jqueryData();
})