const formulario = document.querySelector("#formulario");
const alertSuccess = document.querySelector("#alertSuccess");
const inputNombre = document.getElementById("inputNombre");
const inputEntradas = document.getElementById("inputEntradas");
const hour = document.getElementById("hour");
const btnAgregar = document.getElementById("btnAgregar");
const list = document.getElementById("list");
const d = document;

class Ticket {
  constructor(pelicula, horario, entradas, id) {
    this.pelicula = pelicula;
    this.horario = horario;
    this.entradas = entradas;
    this.id = id;
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
  const { pelicula, horario, entradas, id } = ticket;

  list.innerHTML += `
  <div class="ticket-user row alert alert-warning d-flex align-items-center" role="alert">

    <div class="col-5"> 
      Nombre de la pelicula: <b>${pelicula}</b>
    </div>
    <div class="col-3"> 
      Horario: <b>${horario}</b> hrs.
    </div>
    <div class="col-2"> 
      Entradas compradas: <b>${entradas}</b>
    </div>
    <div class="delete-ticket col-2 text-center"> 


        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        

    </div>
    </div>
    `;
  d.querySelector(".bi-trash").dataset.id = id;
};

// FN MOSTRAR TICKET
const mostrarTicket = () => {
  (list.innerHTML = ""),
    entradasList.forEach((ticket) => {
      templateTicket(ticket);
    });
  let count = document.getElementById("count");
  count.innerHTML = `${entradasList.length}`;
};

// FN PINTAR LOCALSTORAGE
const pintarLS = () => {
  (list.innerHTML = ""),
    (entradasList = JSON.parse(localStorage.getItem("tickets")));

  let count = document.getElementById("count");
  count.innerHTML = `${entradasList.length}`;

  if (entradasList === null) {
    entradasList = [];
  } else {
    entradasList.forEach((element) => {
      templateTicket(element);
    });
  }
};

// qrcode
const qrdata1 = inputNombre.value;
const qrdata2 = hour.value;
const qrdata3 = inputEntradas.value;
const qrcode = new QRCode(document.getElementById("qrcode"));

const generateQR = () => {
  d.getElementById("spanQrCode").classList.remove("d-none");
  qrcode.makeCode(qrdata1, qrdata2, qrdata3);
};

// LISTENERS
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const pelicula = inputNombre.value;
  const entradas = inputEntradas.value;
  const horario = hour.value;
  const id = `${Date.now()}`;
  count += 1;

  if ((!pelicula.trim()) || (!entradas.trim()) || (!horario.trim())) {
    $("#alert").remove();

    $("#container-form").append(
      '<div id="alert" class="mt-4 text-center alert alert-danger" role="alert"> ¡Error, completa todos los campos!</div>'
    );

    $("#alert").fadeIn("slow").delay(2000).fadeOut("slow");

    return;
  }

  const userTicket = new Ticket(pelicula, horario, entradas, id);

  agregarTicket(userTicket);

  $("#alert").remove();

  $("#container-form").append(
    '<div id="alert" class="mt-4 text-center alert alert-success" role="alert"> ¡Compra realizada con exito!</div>'
  );

  $("#alert").fadeIn("slow").delay(2000).fadeOut("slow");

  // GUARDAR EN LOCALSTORAGE
  localStorage.setItem("tickets", JSON.stringify(entradasList));

  mostrarTicket();

  generateQR();
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".bi-trash")) {
    entradasList = entradasList.filter(
      (item) => item.id !== e.target.dataset.id
    );
    mostrarTicket();
    localStorage.setItem("tickets", JSON.stringify(entradasList));
  }
});

// DOM LOAD
d.addEventListener("DOMContentLoaded", () => {
  pintarLS();
});
