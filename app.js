const formulario = document.querySelector("#formulario");
const alertSuccess = document.querySelector("#alertSuccess");
const inputNombre = document.getElementById("inputNombre");
const inputEntradas = document.getElementById("inputEntradas");
const hour = document.getElementById("hour");
const btnAgregar = document.getElementById("btnAgregar");
const ul = document.getElementById("ul");
const list = document.getElementById("list");
const d = document;

class Ticket {
  constructor(pelicula, horario, entradas) {
    this.pelicula = pelicula;
    this.horario = horario;
    this.entradas = entradas;
  }

  verPelicula() {
    document.write(`Estas viendo: ${this.pelicula}`);
  }
}

/* BIENVENIDA DINAMICA h2
const bienvenida = (name) => {
  d.querySelector("h2").innerText = `¡Bienvenid@ ${name} !`;
};
*/

// ARRAY DE ENTRADAS
let entradasList = [];

// FN AGREGAR TICKET
const agregarTicket = (userTicket) => {
  entradasList.push(userTicket);
};

const templateTicket = (ticket) => {
  const { pelicula, horario, entradas } = ticket;

  list.innerHTML += `
  <div class="row alert alert-warning d-flex align-items-center" role="alert">

    <div class="col-5"> 
      Nombre de la pelicula: <b>${pelicula}</b>
    </div>
    <div class="col-3"> 
      Horario: <b>${horario}</b> hrs.
    </div>
    <div class="col-2"> 
      Entradas compradas: <b>${entradas}</b>
    </div>
    <div class="col-2 text-center"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
    </div>
  
  </div>
  `;
};

// FN MOSTRAR TICKET
const mostrarTicket = () => {
  (list.innerHTML = ""),
    entradasList.forEach((ticket) => {
      templateTicket(ticket);
    });
};

// FN PINTAR LOCALSTORAGE
const pintarLS = () => {
  (list.innerHTML = ""),
    (entradasList = JSON.parse(localStorage.getItem("tickets")));

  if (entradasList === null) {
    entradasList = [];
  } else {
    entradasList.forEach((element) => {
      templateTicket(element);
    });
  }
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const pelicula = inputNombre.value;
  const entradas = inputEntradas.value;
  const horario = hour.value;

  const userTicket = new Ticket(pelicula, horario, entradas);

  agregarTicket(userTicket);

  console.log(entradasList);

  // GUARDAR EN LOCALSTORAGE
  localStorage.setItem("tickets", JSON.stringify(entradasList));
  
  mostrarTicket();
});

// DOM LOAD
d.addEventListener("DOMContentLoaded", () => {
  pintarLS();
});

