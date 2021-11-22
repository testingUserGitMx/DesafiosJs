const formulario = document.querySelector("#formulario");
const alertSuccess = document.querySelector("#alertSuccess");
const inputNombre = document.getElementById("inputNombre");
const inputEntradas = document.getElementById("inputEntradas");
const hour = document.getElementById("hour");
const btnAgregar = document.getElementById("btnAgregar");
const ul = document.getElementById("ul");
const d = document;

class Ticket {
  constructor(pelicula, horario, entradas) {
    this.pelicula = pelicula;
    this.horario = horario;
    this.entradas = entradas;
  }

  // comprarEntrada() {
  //   document.write(`
  //   <p> Haz comprado ${this.entradas} entrada(s) para la pelicula ${this.pelicula}
  //   a las ${this.horario} hrs</p>`);

  //   entradasList.push(this.entradas);
  // }

  verPelicula() {
    document.write(`Estas viendo: ${this.pelicula}`);
  }
}


// BIENVENIDA DINAMICA h2

const bienvenida = (name) => {
  d.querySelector("h2").innerText = `¡Bienvenid@ ${name} !`;
};

// ARRAY DE ENTRADAS
const entradasList = [];


// FN AGREGAR TICKET 
const agregarTicket = (userTicket) => {
  entradasList.push(userTicket);
  localStorage.setItem('tickets', JSON.stringify(userTicket))
};

// FN MOSTRAR TICKET
const mostrarTicket = () => {
  entradasList.forEach((ticket) => {
    
    const { pelicula, horario, entradas } = ticket;
    
    ul.innerHTML += `<li>Nombre de la pelicula: ${pelicula}</li>
    <li>Horario: ${horario}</li>
    <li>Entradas compradas: ${entradas}</li>`;
  });
};




formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const pelicula = inputNombre.value;
  const entradas = inputEntradas.value;
  const horario = hour.value;

  const userTicket = new Ticket(pelicula, horario, entradas);

  agregarTicket(userTicket);

  console.log(entradasList);

  mostrarTicket();
});

// DOM LOAD
d.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("names")) {
    let name = prompt("Login - Ingresa tu nombre:");
    localStorage.setItem("names", name);
    bienvenida(name);
  }

  if (localStorage.getItem("names")) {
    for (let i = 0; i < localStorage.length; i++) {
      let names = localStorage.key(i);
      d.querySelector("h2").innerText = `¡Bienvenid@ ${localStorage.getItem(names)}!`;
    }
  }

  if(localStorage.getItem('tickets')){
    entradasList = JSON.parse(localStorage.getItem('tickets'))
    mostrarTicket();
    
  }





});


