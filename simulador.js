let edadMinima = 18

const login = function() {
    let user = confirm('Usuario Registrado?')
    if(user){
        alert('Bienvenido')
        
    };    
};

const alertUser = () => {
    let edad = parseInt(prompt('Ingrese edad'));
    if(edad >= edadMinima){
        alert('Puedes cotizar tu prestamo')
    } else {
        alert('Necesitas tener la edad minima para hacer tu prestamo')
    }
    
};


login();

setTimeout(() => {
    alertUser()
}, 2000);


