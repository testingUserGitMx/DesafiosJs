const formulario = document.querySelector("#formulario");
const alertSuccess = document.querySelector("#alertSuccess");
const template = document.querySelector("#template").content;

class Ticket {
  constructor(pelicula, horario, entradas) {
    this.pelicula = pelicula;
    this.horario = horario;
    this.entradas = entradas;
  }

  comprarEntrada() {
    document.write(`
    <p> Haz comprado ${this.entradas} entrada(s) para la pelicula ${this.pelicula} 
    a las ${this.horario} hrs</p>`);

    entradasList.push(this.entradas);
  }

  verPelicula() {
    document.write(`Estas viendo: ${this.pelicula}`);
  }
}

const user = new Ticket("Infinity War", "6PM", 2);

const entradasList = [];

user.comprarEntrada();
user.verPelicula();

console.log(entradasList);
