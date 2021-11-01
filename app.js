// DESAFIO #4.5 - FUNCIONES RELACIONADAS 📕📙 //

// GLOBALS 
let nombre = prompt('Cual es tu nombre?');
let IVA = 0.16

// FUNCION SALUDAR
const saludar = function (nombre) {
    alert(`Bienvenido ${nombre}`)
}

// FUNCION CALCULAR EL IVA - IVA 16%
const costoTotal = () => {
    let precio = Number(prompt('Ingrese precio'));
    let precioTotal = precio * IVA + precio
    alert(`El costo total es: ${precioTotal}`)
};

// ES MULTIPLO ?
const isMultiple = nombre => {
    let number = Number(prompt('Ingrese un numero'));
    if(number %2 == 0) {
        alert(`${nombre}!, El numero que ingresaste es multiplo!`)
    } else {
        alert(`${nombre}!, El numero que ingresaste no es multiplo :(`)
    }
}


saludar(nombre);

costoTotal();

isMultiple(nombre);
