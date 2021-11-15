const formulario = document.querySelector("#formulario");
const alertSuccess = document.querySelector("#alertSuccess");
const inputNombre = document.getElementById("inputNombre");
const inputEntradas = document.getElementById("inputEntradas");
const hour = document.getElementById("hour");
const btnAgregar = document.getElementById("btnAgregar");
const ul = document.getElementById("ul")
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

// ARRAY DE ENTRADAS
const entradasList = [];


// BIENVENIDA DINAMICA h2

const bienvenida = (name) => {
  d.querySelector("h2").innerText = `¡Bienvenid@ ${name} !`;
};

// RENDER
d.addEventListener("DOMContentLoaded", () => {
  let name = prompt("Login - Ingresa tu nombre:");
  bienvenida(name);
});

const agregarTicket = (userTicket) => {
  entradasList.push(userTicket);
};

const mostrarTicket = () => {
  entradasList.forEach((ticket) => {
    
    const { pelicula, horario, entradas } = ticket;
    ul.innerHTML = 
    `<li>Nombre de la pelicula: ${pelicula}</li>
     <li>Horario: ${horario}</li>
     <li>Entradas compradas: ${entradas}</li>`

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
